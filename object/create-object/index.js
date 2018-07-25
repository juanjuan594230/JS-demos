/* 原型模式 */
function Person() {}

Person.prototype.name = 'renyujuan';
Person.prototype.age = '18';
Person.prototype.teachers = ['sunchangai', 'baohong', 'zhuyan'];
Person.prototype.sayName = function() {
  console.log(this.name);
}

const p1 = new Person();
console.log(p1.hasOwnProperty('name'));  // false  一开始实例上并不包含name属性
console.log(p1.hasOwnProperty('teachers'));  //false
p1.name = 'nenyujuan';  // 将name添加到了p1的实例属性
p1.teachers.pop();  // teachers是一个引用类型，修改的是原型上共享的属性，实例上依旧没有该属性
console.log(p1.hasOwnProperty('name'));  // true 所以这个时候p1包含了name的实例属性
console.log(p1.hasOwnProperty('teachers'));  // false
console.log(p1.name);
console.log(p1.teachers);
const p2 = new Person();
// p2没有赋值，实例上不包含name属性 读取的是原型上的name属性
console.log(p2.hasOwnProperty('name'));
console.log(p2.name);
console.log(p2.teachers);
// console.log(p1.__proto__.name);  // renyujuan
// console.log(p2.__proto__.name);  // renyujuan