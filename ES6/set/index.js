/* 
    创建 
    构造函数中可以传入一个数组或者类数组对象（arguments、nodeList...）
*/
const s1 = new Set();
const s2 = new Set([1,2,2,4,5,6,6]);
console.log(s1);
console.log(s2);  // {size: 5, entries: [1,2,4,5,6], __proto__: Set.prototype}

/* 
    set中不包含重复的值
    set保存值时不会发生类型转化，5 & ‘5’是两个不同的值
    NaN === NaN
    两个对象始终不相等
*/

/* 
    set实例的属性和方法：
    add(value)  返回set结构本身
    has(value)  set中是否存在该值，返回一个布尔值
    delete(value) 删除set中的某一项，返回一个删除是否成功的布尔值
    clear() 清空set结构,没有返回值
*/

console.log(s1.add('renyujuan')); // {size: 1, entries: ['renyujuan'], __proto__: Set.prototype}
const isHas = s1.has('renyujuan');
console.log(isHas);  // true
const isDel = s1.delete('liu');
console.log(isDel);  // false
s1.clear();
console.log(s1);  // {size: 0, entries: [], __proto__: Set.prototype}

/* 可以利用set，去除数组中的重复值 */
function dedupe(arr) {
    // return [...new Set(arr)]
    return Array.from(new Set(arr));
}

const arr = dedupe([1,1,2,2,4,5,7,8,8]);
console.log(arr);  // [1,2,4,5,7,8]

/* 
    遍历方法：返回一个遍历器对象
    keys() 
    values()   和使用for...of 一样
    entries()  返回一个遍历器对象，每一项都是一个数组
    forEach()
*/

const s3 = new Set(['red', 'green', 'blue']);
 
for (let key of s3.keys()) {
    console.log(key);  // red, green, blue
}

for (let entry of s3.entries()) {
    // entry为一个数组，数组中的两个成员完全相等
    console.log(entry); // ['red', 'red'], ['green', 'green'],['blue', 'blue']
}

/* 以下三种形式遍历到的时一样的 */
for (let value of s3.values()) {
    console.log(value);  // red, green, blue
}
for (let value of s3) {
    console.log(value);
}
// 扩展运算符的内部使用的也是for-of
[...s3];

/* 使用set实现数组的并集、交集和差集 */
const a = [1,2,3];
const b = [4,3,2];

// [1,2,3,4]
function union(arr1, arr2) {
    const setA = new Set(arr1);
    arr2.forEach((item) => {
        setA.add(item);
    });
    return [...setA];
}

// [2]
function intersect(arr1, arr2) {
    const setA = new Set(arr1);
    return arr2.filter((item) => {
        return setA.has(item);
    })
}

// [1,3,4]
function different(arr1, arr2) {
    const setB = new Set(arr2);
    return arr1.filter((item) => {
        return !setB.has(item);
    })
}

const unions = union(a, b);
const intersects = intersect(a, b);
const diffs = different(a, b);
console.log(unions);
console.log(intersects);
console.log(diffs);

