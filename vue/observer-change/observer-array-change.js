/* 
上一节只实现了监听对象属性的变化
本节：监听一个数组的变化 
    对象类型的属性修改时，新生成的对象属性也具备getter和setter
*/

/* 
  思路：重新包装数据中数组的push\pop等常用方法（是数据中数组的push\pop等，非Array）
  Vue数组中的变异方法：
  push()、pop()、shift()、unshift()、splice()、sort()、reverse()
*/

const methodsArr = ['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'];
const arrayAugmentations = [];

methodsArr.forEach((method) => {
  let original = Array.prototype[method];
  arrayAugmentations[method] = function() {
    console.log('我被改变了');
    return original.apply(this, arguments);
  }
});

// 改变list的原型对象，push调用的是arrayAugmentations中的push
let list = ['a', 'b', 'c'];
list.__proto__ = arrayAugmentations;
list.push('d');
console.log(list);

// list2的原型对象没有改变，调用的是原生的push
let list2 = ['1', '2', '3'];
list2.push('4');
console.log(list2);

// 组合继承
function MyArray() {
  Array.apply(this, arguments);
}

MyArray.prototype = Object.create(Array.prototype);
MyArray.constructor = MyArray;
MyArray.prototype.push = function() {
  console.log('数据变化了');
  return Array.prototype.push.apply(this, arguments);
}

let myList = new MyArray('l', 'o', 'v');
console.log(myList);
myList.push('e');
console.log(myList);

// 原生JS的Array、Object、String、Number、Regexp等构造函数，不会对apply、call传入的this做任何处理
console.log(Object.apply({a:1}));  // {}
console.log(Object());             // {}
