/* 本例：this._binding = {
          number: {
            _directives: [
              {name: "input", el: input, vm: myVue, exp: "number", attr: "value"},
              {name: "text", el: h3, vm: myVue, exp: "number", attr: "innerHTML"}
            ]
          }
        } 
*/

class myVue{
  constructor(options) {
    this._init(options);
  }
  _init(options) {
    this.$options = options;
    this.$el = document.querySelector(options.el);
    this.$data = options.data;
    this.$methods = options.methods;
    //_binding保存着model与view的映射关系，也就是我们前面定义的Watcher的实例。当model改变时，我们会触发其中的指令类更新，保证view也能实时更新
    this._binding = {};
    this._observer(this.$data);
    this._complie(this.$el);
  }
  _observer(obj) {
    let value;
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        value = obj[key];
        this._binding[key] = {
          _directives: []
        }
        const binding = this._binding[key];
        if (typeof value === 'object') {
          this._observer(obj[key]);
        }
        Object.defineProperty(obj, key, {
          enumerable: true,
          configurable: true,
          get: function() {
            console.log(`获取属性${key}的值`);
            return value;
          },
          set: function(newVal) {
            console.log(`更新属性${key}的值`);
            if (value !== newVal) {
              value = newVal;
              binding._directives.forEach((item) => {
                item.update();
              })
            }
          }
        })
      } 
    }
  }
  // 解析指令，并将view 与model进行绑定
  _complie(root) {
    const _this = this;
    // 获取root节点的子节点
    const nodes = root.children;
    for (let i = 0, len = nodes.length; i < len; i++) {
      const node = nodes[i];
      if (node.children.length) {
        // 递归遍历所有元素，并进行处理
        _this._complie(node);
      }
      // 如果有v-click属性，我们监听它的onclick事件，触发increment事件，即number++
      // if (node.hasAttribute('v-click')) {
      //   const attrVal = node.getAttribute('v-click');
      //   //bind是使data的作用域与method函数的作用域保持一致   bind方法创建了一个函数实例，返回该实例作为click方法的回调
      //   const callback = _this.$methods[attrVal].bind(_this.$data);
      //   node.onclick = callback;
      // }
      // 如果有v-bind属性，我们只要使node的值及时更新为data中number的值即可
      if (node.hasAttribute('v-bind')) {
        const attrVal = node.getAttribute('v-bind');
        _this._binding[attrVal]._directives.push(new Watcher('text', node, _this, attrVal, 'innerHTML'));
      }
      // 如果有v-model属性，并且元素是INPUT或者TEXTAREA，我们监听它的input事件
      if (node.hasAttribute('v-model') && (node.tagName == 'INPUT' || node.tagName == 'TEXTAREA')) {
        node.addEventListener('input', (function(key) {
          const attrVal = node.getAttribute('v-model');
          _this._binding[attrVal]._directives.push(new Watcher(  
            'input',
            node,
            _this,
            attrVal,
            'value'
          ));
          return function() {
            // 使number 的值与 node的value保持一致，已经实现了双向绑定
            _this.$data[attrVal] = nodes[key].value;
          }
        })(i));
      }
    }
  }
}

// 指令类？？？
class Watcher{
  constructor(name, el, vm, exp, attr) {
    this.name = name;  // 指令名称
    this.el = el;   // 指令对应的DOM元素
    this.vm = vm;   // 指令所属的vm实例
    this.exp = exp;   // 指令对应的值 
    this.attr = attr; // 绑定的属性值
    this.update();
  }
  update() {
    // h3.innerHtml = this.data.number 当number改变的时候，会触发update这个函数，保证的DOM内容得到更新
    this.el[this.attr] = this.vm.$data[this.exp];
  }
}

