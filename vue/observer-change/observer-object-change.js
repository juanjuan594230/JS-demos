/* 如何监听一个对象的改变 */

const data = {
  user: {
      name: "liangshaofeng",
      age: "24"
  },
  address: {
      city: "beijing"
  },
  name: 'renyujuan'
};

function Observer(data) {
  this.data = data;
  this.walk(data);
}

Observer.prototype.walk = function(obj) {
  let val;
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      val = obj[key];
      // 对象
      if (Object.prototype.toString.call(val) === '[object Object]') {
        new Observer(val);
      }
      this.convert(key, val);
    }
  }
}

Object.prototype.convert = function(key, val) {
  Object.defineProperty(this.data, key, {
    enumerable: true,
    configurable: true,
    get() {
      console.log(`访问了${key}属性`);
      return val;
    },
    set(newVal) {
      if (val !== newVal) {
        console.log(`设置了${key}属性`);
        val = newVal;
      }
    }
  })
}

new Observer(data);
// console.log(data.user.age); 
data.user = {
  name: 'renyujuan',
  age: 28
};
/* 
  当set一个对象类型的属性时，新生成的对象中的属性不能调用getter和setter
*/
console.log(data.user.age);   // 访问了user属性，但是age属性的getter失效了