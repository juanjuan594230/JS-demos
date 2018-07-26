class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayName() {
    alert(this.name);
  }

  sayAge() {
    alert(this.age);
  }

}
// 类的typeof是一个function, 不能像正常函数那样去调用，只能使用new操作符来调用，
typeof Person // function

// 类内部定义的方法都是不可枚举的，即定义在类内部原型上的方法属性都是不可枚举的
// console.log(Object.keys(Person.prototype)); // []

// 可以通过Object.assign向原型上添加属性,为可枚举
Object.assign(Person.prototype, {
  sayHi() {
    alert('hi');
  }
})

console.log(Object.keys(Person.prototype));  // [sayHi]

// 如何获取一个实例对象的原型对象
const p1 = new Person('renyujuan', '18');
console.log(Object.getPrototypeOf(p1));  // Person.prototype

// class表达式  名字为Person  _me是供类内部使用，若没有用到，可以省略
// const Person = class _me{}


/* 类不存在变量声明提升 */
// new Foo();  // Uncaught ReferenceError: Foo is not defined
class Foo {};

// const let 也不存在变量声明提升
// console.log(a);  // Uncaught ReferenceError: a is not defined
const a = 'aaa';

// var 存在变量声明提升
console.log(b);
var b = 'bbb';

/* 
var b;
console.log(b);
b = 'bbb;
*/


/* ES6 inherit */
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

// Must call super constructor in derived class before accessing 'this' or returning from derived constructor
// class ColorPoint extends Point {
//   constructor(size, color) {
//     this.color = color;
//     super(size);
//   }
// }


// 在子类的构造函数中，只有调用super之后，才可以使用this关键字，否则会报错
class ColorPoint extends Point {
  constructor(x, y, color) {
    super(x, y);
    this.color = color;
  }
}

const cp1 = new ColorPoint(1, 1, 'red');
console.log(Object.keys(cp1));