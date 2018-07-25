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
// 包含引用类型值的原型属性会被所有实例所共享  colors会被所有实例共享  重要！！！
/* function SuperType(name) {
    this.name = name;
    this.colors = ['red', 'green'];
}

SuperType.prototype.sayName = function() {
    alert(this.name);
}

function SubType(age) {
    this.age = age;
}

SubType.prototype = new SuperType('panda');

SubType.prototype.sayAge = function() {
    alert(this.age);
}

const sub1 = new SubType('renyujuan', 28);
// 原型上的引用类型属性会被所有实例共享，在sub1上修改该属性，则会影响所有的实例
sub1.colors.push('black');
// 原型上的普通属性不会有上述情况
sub1.name = 'zhangshaohua';
console.log(sub1.colors);
console.log(sub1.name);
const sub2 = new SubType('liuyiqiang', 26);
console.log(sub1.colors);
console.log(sub2.name); */

/* 原型 & 构造函数 */
/* function National(country) {
    this.country = country;
}

National.prototype.speak = function() {
    console.log(`I am speak ${this.country}`);
}

function Person(name, age, country) {
    // 1
    National.call(this, country);
    this.name = name;
    this.age = age;
}

// 2
Person.prototype = new National();

Person.prototype.constructor = Person;
Person.prototype.sayName = function() {
    console.log(this.name);
}

const p1 = new Person('renyujuan', 18, 'chinese');
p1.sayName();
p1.speak();
const p2 = new Person('liyiqiang', 18, 'english');
p2.sayName();
p2.speak(); */

/* 非构造函数继承 */
// 让doctor继承chinese
/* const chinese = {
    nation: '中国'
}

const doctor = {
    career: '医生'
} */

/* const chinese = {
    nation: '中国'
}

// 如果被继承的对象中存在引用类型的属性，那么该属性就会被所有调用object方法创建的实例所共享，类似原型链实现继承的问题
function object(o) {
    function F() {};
    // 将要继承的对象，付给临时构造函数的原型
    F.prototype = o;
    return new F();
}

const doctor = object(chinese);
doctor.career = '医生';
console.log(doctor.nation); */

/* 浅拷贝 */
/* const chinese = {
    nation: '中国'
}

const doctor = {
    career: '医生'
}

function extendCopy(p) {
    let c = {};
    for (let i in p) {
        c[i] = p[i];
    }
    c.uber = p;
    return c;
}

const d1 = extendCopy(chinese);
d1.career = '医生';
console.log(d1); */

/* 深拷贝 */
const chinese = {
    nation: 'china',
    cities: ['beijing', 'suzhou', 'fenyang', 'taiyuan'],
    language: {
        type: 'chinese'
    }
}

const doctor = {
    career: '医生'
}

function deepClone(p, c) {
    c = c || {};
    for (let attr in p) {
        if (typeof p[attr] !== 'object') {
            c[attr] = p[attr];
        } else {
            c[attr] = Object.prototype.toString.call(p[attr]) === '[object Array]' ? [] : {};
            deepClone(p[attr], c[attr]);
        }
    }
    return c;
}

console.log(deepClone(chinese, doctor));




