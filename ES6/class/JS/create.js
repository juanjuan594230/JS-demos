class Country {
  constructor(countryName, language, captial) {
    this.countryName = countryName;
    this.language = language;
    this.captial = captial;
  }

  say() {
    alert(this.language);
  }

  // 静态方法可以与实例方法同名
  static say() {
    this.updateLaw();  // 静态方法内部的this代表类本身，而非实例对象  EG: Country.updateLaw()
  }

  // 直接通过类来调用的方法称为静态方法
  static updateLaw() {
    alert('update law');
  }
}

/* const china = new Country('china', 'chinese', 'beijing');
// 类的实例不能调用类中定义的静态方法。 只有类本身可以调用
china.say();
// china.updateLaw();  // china.updateLaw is not a function
Country.updateLaw(); */

class ChinesePeople extends Country {
  constructor(country, language, captial, name, bitthPlace) {
    // 继承父类，先调用父类的构造方法
    super(country, language, captial);
    this.name = name;
    this.birthPlace = this.birthPlace;
  }

  sayName() {
    alert(this.name);
  }
}


/* const renyujuan = new ChinesePeople('中国', '中文', '北京', '任宇娟', '山西');
renyujuan.say();
renyujuan.sayName();
ChinesePeople.updateLaw();   // 父类的static方法，子类也可以调用
// console.log(Object.keys(renyujuan)); */

alert(Object.getPrototypeOf(ChinesePeople));

/* 1-3  super */
// super作为函数调用，代表父类的构造函数， 但返回的是子类的实例  ChinesePeople.prototype.constructor.call(this, country, language, captial)
// super作为函数时，只能在子类的constructor中调用，否则会报错

// super作为对象时，在普通方法中指向父类的原型对象，在静态方法中，指向父类  （父类实例属性是没有办法通过super来找到的）
// 在子类普通方法中通过super调用父类的方法时，方法内部的this指向当前的子类实例
// 在子类的静态方法中通过super调用父类的方法时，方法内部的this指向当前的子类，而不是子类的实例