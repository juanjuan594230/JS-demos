/* 回调函数 */
/* fs.readFile('/etc/passwd', function() {
  // 成功返回文件之后，do something
}) */

// 回调地狱
/* fs.readFile(fileA, function() {
  fs.readFile(fileB, function() {
    fs.readFile(fileC, function() {
      // do something
    })
    // do something
  });
  // do something
}) */

/* Generator函数最大的特点就是可以交出函数的执行权 */
/* function* gen(x) {
  const y = yield x + 2;   // 执行到这一步，可以交出函数的执行权
  console.log(y);
  return y;
}

const gIterator = gen(1);    // 执行gen(),不会执行，返回一个指针对象
console.log(gIterator.next());  // {value:3, done:false}
// console.log(gIterator.next());  // {value:undefined, done:true}
// 可以向generator函数中传递数据，作为上个阶段异步任务的返回结果
console.log(gIterator.next());  // {value:2, done:true} */

/* generator函数内部可以部署错误处理代码，捕获函数体外抛出的错误 */
/* function* gen1(x) {
  try {
    yield x + 1;
  } catch (error) {
    console.log(error);
  }
  return 'ending';
}

const g1 = gen1(1);
g1.next();
g1.throw('出错了'); */

/* 实例应用 */
// promise
/* function readFilePromise(fileName) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve(fileName);
      gList.next(fileName);
    }, 1000)
  })
}

// readFilePromise('some1.json').then(data => {
//   console.log(data)  // 打印第 1 个文件内容
//   return readFilePromise('some2.json')
// }).then(data => {
//   console.log(data)  // 打印第 2 个文件内容
//   return readFilePromise('some3.json')
// }).then(data => {
//   console.log(data)  // 打印第 3 个文件内容
//   return readFilePromise('some4.json')
// }).then(data=> {
//   console.log(data)  // 打印第 4 个文件内容
// })

// generator
function* gen() {
  const r1 = yield readFilePromise('some1.json');
  console.log(r1);
  const r2 = yield readFilePromise('some2.json');
  console.log(r2);
  const r3 = yield readFilePromise('some3.json');
  console.log(r3);
  const r4 = yield readFilePromise('some4.json');
  console.log(r4);
}

const gList = gen();
gList.next(); */

/* next yield 参数传递 */
/* function* gen1() {
  const a = yield 100;
  console.log(a);
  const b = yield 200;
  console.log(b);
  const c = yield 300;
  console.log(c);
}

const g1 = gen1();
console.log(g1.next());       // {value: 100, done: 'false'}
// 有一个要点需要注意，就g.next('aaa')是将'aaa'传递给上一个已经执行完了的yield语句前面的变量，而不是即将执行的yield前面的变量。
console.log(g1.next('aaa'));  // {value: 200, done: 'false'}   
console.log(g1.next('bbb'));  // {value: 300, done: 'false'}
console.log(g1.next('ccc'));  // {value: undefined, done: 'false'} */


/* 菲波那切数列 */
/* function* fibonacci() {
  let [prev, curr] = [0, 1]
  // 相当于为变量赋值 属于ES6的解构赋值
  // let prev = 0,
  //     curr = 1;
  while(true) {
      [prev, curr] = [curr, prev + curr]
      // 将中间值通过 yield 返回，并且保留函数执行的状态，因此可以非常简单的实现 fibonacci
      yield curr
  }
}
// 使用for...of遍历iterator对象，可以直接将其值获取出来。这里的“值”就对应着调用next()返回的结果的value属性
// n 就是iteraotr调用next()返回的对象的value属性值，如：{value:..., done: false}
for (let n of fibonacci()) {
  if (n > 1000) {
      break
  }
  console.log(n)
}
 */

 /* yield* 语句 */
//  有两个generator语句，想要在第一个中包含第二个，如下：
/* function* gen2() {
  yield 'a';
  yield 'b';
}
function* gen3() {
  yield 'x';
  yield 'y';
}

// 针对上面两个generetor，需求是一次输出 a, x, y, b
// for of 实现
for (let n of gen2()) {
  console.log(n);
  if (n === 'b') {
    break;
  }
  for (let m of gen3()) {
    console.log(m);
  }
} */ 

// yield* 实现
function* gen2() {
  yield 'a';
  // yield* 后面跟一个generator，而且会将里面的yield按照规则一步步来执行。
  yield* gen3();
  yield 'b';
}
function* gen3() {
  yield 'x';
  yield 'y';
}

for (let value of gen2()) {
  console.log(value);
}