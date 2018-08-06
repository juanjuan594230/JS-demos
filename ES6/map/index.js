/* 
    map结构
    1、map结构是一种键值对的集合。
    2、map结构的键名可以是任意类型的值（不仅仅局限于字符串，object的键名只能是字符串）这一点很重要!!!
*/

/* 
    构造函数
    1.数组的成员时一个表示键值对的数组 [['name', 'renyujuan'], ['age', 28]]  !!!
*/
const m1 = new Map();
// const m2 = new Map(['a', 'b', 'c']); 
const m2 = new Map([['name', 'renyujuan'], ['age', 28]]);
const o = {
    p: 'hello world'
};

/* 
    实例方法：
    set(key,value)  设置key对应的键值，返回整个map结构，如果key已经有值，则覆盖之前的值，否则生成新的key值
    get(key) 读取key对应的值，如果不存在，则返回undefined
    has(key) 表示key键是否在map结构中，返回一个布尔值
    delete(key) 删除map的某个键，成功返回true，删除失败返回false
    clear()  清除所有成员，没有返回值
    实例属性
    size
*/
m1.set(o, "content");   // add (key, value)
console.log(m1.get(o));
console.log(m1);
console.log(m2);

/* 
    遍历方法：都返回一个遍历器对象
    keys()
    values()
    entries()
    forEach()
*/

let map1 = new Map([
    ['F', 'no'],
    ['T', 'yes']
]);

for (let key of map1.keys()) {
    console.log(key);  // F  T
}

for (let val of map1.values()) {
    console.log(val);  // no  yes
}

// map默认的遍历器借口（symbol.iterator属性）就是entries()
for (let val of map1) {
    console.log(val);  // ['F', 'no'] ['T', 'yes']
}
for (let entry of map1.entries()) {
    console.log(entry);  // ['F', 'no'] ['T', 'yes']
}

/* 将map结构转换为数组 */
console.log([...map1.keys()]); // ['F', "T"]
console.log([...map1.values()]); // ['no', 'yes']
console.log([...map1]);  // [['F', 'no'] ['T', 'yes']]

/* 
    将map转换为对象 
    前提：map的所有键都是字符串
*/

function strmapToObj(map) {
    let obj = Object.create(null);
    for (let [k, v] of map) {
        obj[k] = v;
    }
    return obj;
}

function objToMap(obj) {
    let map = new Map();
    for (let key of Object.keys(obj)) {
        map.set(key, obj[key]);
    }
    return map;
}

/* 
    将map转换为JSON对象 
    1:map的所有键都是字符串 -> JSON object
    2:map的键名包含非字符串 -> JSON Array 
*/

function mapToJsonobj(map) {
    return JSON.stringify(strmapToObj(map));
}

function mapToJsonArray(map) {
    return JSON.stringify([...map]);
}

function JsonObjtoMap(json) {
    return objToMap(JSON.parse(json));
}

function JsonArrayToMap(jsonArr) {
    return new Map(JSON.parse(jsonArr));
}