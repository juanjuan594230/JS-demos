/* 1-1 对象属性和方法的简写 */
const name = 'renyujuan';
const obj = {
  name,
  sayName(name) {
    alert(name);
  }
}

/* Object.is() 用来比较两个值是否相等  与===行为基本一致 */
// special
console.log(0 === -0);  // true
console.log(Object.is(+0, -0)); //false
console.log(NaN === NaN); // false
console.log(Object.is(NaN, NaN)); // true

Object.defineProperty(Object, 'is', {
  value: function(x, y) {
    if (x === y) {
      // 若x不是0, +0, -0,则||只执行左半部分， 若是开始执行右半部分
      return x !== 0 || 1 / x === 1 / y;
    } 
    // 自己不等于自己的，只有NaN，这样判断了两个数都是NaN的话，返回true
    return x !== x && y !== y;
  },
  configurable: true,
  enumerable: false,
  writable: true
})

/* Object.assign() 对象的合并，非构造函数实现继承 */
/* 
  考虑的情况：
    只传一个参数， 是对象直接返回，不是对象转换成对象再返回 （Q：如何转换成对象？？） undefined、null不能转换成对象，所以他们作为第一个参数，会报错
    如果非对象参数出现在源对象的位置（即不是第一个参数），则会先尝试转换成对象，不能转换，就跳过，不会报错
*/


