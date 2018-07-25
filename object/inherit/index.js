// inherit
// 构造函数
/* 
    属性可以每一实例单独拥有，但定义在构造函数中的方法，也没有办法共享
    定义在父类原型中的方法无法读取
*/
/* function Father(name) {
    this.name = name;
    this.colors = ['red', 'black', 'green'];
    // 方法在构造函数中定义，无法共享
    this.sayAge = function() {
        alert('age');
    }
}

Father.prototype.sayName = function() {
    alert(this.name);
}

function Son(name, age) {
    Father.call(this, name);
    this.age = age;
}

const instance1 = new Son('renpeihui', 32);
console.log(instance1);
instance1.colors.push('pink');
const instance2 = new Son('liuyiqiang', 26);
console.log(instance1.colors);  // ['red', 'black', 'green', 'pink']
console.log(instance2.colors);  // ['red', 'black', 'green']
// instance1.sayName is not a function 无法读取父类定义在原型上的方法
// instance1.sayName(); */

/* 原型链 */

