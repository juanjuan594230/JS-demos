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
function* gen1() {
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
console.log(g1.next('ccc'));  // {value: undefined, done: 'false'}
