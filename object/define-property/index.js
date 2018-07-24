const person = {
    name: 'renyujuan',
    age: 28,
    job: 'software engineer',
    sayName: function() {
        alert(this.name);
    }
}

// 数据属性  [[configurable]]  [[enumerable]] [[writable]] [[value]]
// [[configurable]] 表示能否修改属性的特性、能否使用delete删除属性并重新定义属性
// [[enumerable]] 表示能否通过for-in循环返回属性  for-in返回对象的可枚举属性  数组的length属性和对象的constructor属性都是不可枚举的
// [[writable]] 表示能否修改属性的值
// [[value]] 读取属性的时候从这里读，修改属性的时候存在这里，默认为undefined

// Object大写 最后一个参数是一个描述对象，如果不指定，4个特性默认都为false
Object.defineProperty(person, 'home', {
    configurable: true,
    enumerable: true,
    writable: true,
    value: 'shanxi'
});

// 一旦将home属性的configurable属性设置为false，便不能再使用defineProperty()修改除了writable之外的特性
Object.defineProperty(person, 'home', {
    configurable: false,
});

//  Cannot redefine property: homeat Function.defineProperty (<anonymous>)at index.js:29
// Object.defineProperty(person, 'home', {
//     enumerable: false,
// });

for (let i in person) {
    console.log(i + '_' + person[i]);
}

console.log(person.home);
// 修改不成功
person.home = 'fujian';
console.log(person.home);

// 访问器属性 [[configurable]] [[enumerable]] [[get]] [[set]]
// 只指定getter意味着属性不能写，只指定setter意味着属性不能读
Object.defineProperty(person, 'xusui', {
    get: function() {
        return this.age + 1;
    },
    set: function(newAge) {
        this.age = newAge - 1;
    }
})

person.xusui = 29;
console.log(person.age);
console.log(person.xusui);

// Object.getOwnPropertyDescriptor()  获得一个属性的描述对象

