class Vue {
    constructor(options) {
        this.options = options;
        this.$data = options.data;
        this._init(this.$data);
    }
    _init(obj) {
        this._observer(obj);
    }
    _cb() {
        console.log('视图更新了');
    }
    _defineReactive(obj, key, value) {
        const _this = this;
        const dep = new Dep();
        Object.defineProperty(obj, key, {
            configurable: true,
            enumerable: true,
            get() {
                Dep.target && dep.addSub(Dep.target);   // Dep.target为一个watcher实例，当创建一个实例时，就会再当前属性中增加一个依赖
                return value;
            },
            set(newValue) {
                if (value !== newValue) {
                    value = newValue;
                    _this._cb();
                    dep.notify();
                }
            }
        })
    }
    _observer(obj) {
        if (!obj || typeof obj !== 'object') {
            return;
        }
        Object.keys(obj).forEach((item) => {
            if (typeof item === 'object') {
                this._observer(obj[item]);
            } else {
                this._defineReactive(obj, item, obj[item]);
            }
        });
    }
}

class Dep {
    constructor() {
        this.subs = [];
    }
    addSub(watcher) {
        this.subs.push(watcher);
    }
    notify() {
        this.subs.forEach((watcher) => {
            watcher.update();
        })
    }
}
Dep.target = null;

// compile中，如果某个元素依赖data中的某个属性，就会new一个watcher对象，收集该属性的依赖
class Watcher {
    constructor(vm, exp, callback) {
        this.vm = vm;
        this.exp = exp;
        this.callback = callback
        this.value = this.get();
    }
    update() {
        console.log('shitu gengxinle');
    }
    get() {
        Dep.target = this;
        // 读取属性，目的是是为调用属性的getter，收集依赖
        const value = vm.$data[exp];
        Dep.target = null;
        return value;
    }
}

class vNode {
    constructor(tag, data, children, text, elm) {
        this.tag = tag;  // 标签名
        this.data = data; // 当前节点的数据信息
        this.children = children;
        this.text = text;  // 当前节点文本
        this.elm = elm; // 真实对应的DOM节点
    }
}

// 比如一个vue组件模版
{/* <template>
  <span class="demo" v-show="isShow">
    This is a span.
  </span>
</template> */}

// 用JS形式的代码表示
function render() {
    return new vNode(
        'span', 
        {
            /* 指令集合数组 */
            directives: [
                {
                    /* v-show指令 */
                    rawName: 'v-show',
                    expression: 'isShow',
                    name: 'show',
                    value: true
                }
            ],
            /* 静态class */
            staticClass: 'demo'
        },
        [new vNode(undefined, undefined, undefined, 'This is a span.')]
    )
}

// 转换成vNode
const vNode = {
    tag: 'span',
    data: {
        /* 指令集合数组 */
        directives: [
            {
                /* v-show指令 */
                rawName: 'v-show',
                expression: 'isShow',
                name: 'show',
                value: true
            }
        ],
        /* 静态class */
        staticClass: 'demo'
    },
    text: undefined,
    children: [
        /* 子节点是一个文本VNode节点 */
        {
            tag: undefined,
            data: undefined,
            text: 'This is a span.',
            children: undefined
        }
    ]
}



