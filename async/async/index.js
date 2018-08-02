function readFilePromise(fileName) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(fileName);
      // gList.next(fileName);
    }, 1000)
  })
}

// generator
// function* gen() {
//   const r1 = yield readFilePromise('some1.json');
//   console.log(r1);
//   const r2 = yield readFilePromise('some2.json');
//   console.log(r2);
//   const r3 = yield readFilePromise('some3.json');
//   console.log(r3);
//   const r4 = yield readFilePromise('some4.json');
//   console.log(r4);
// }

// const gList = gen();
// gList.next();

/* async */
const asyncReadFile = async function () {
  const r1 = await readFilePromise('some1.json');
  console.log(r1);
  const r2 = await readFilePromise('some2.json');
  console.log(r2);
  const r3 = await readFilePromise('some3.json');
  console.log(r3);
  const r4 = await readFilePromise('some4.json');
  console.log(r4);
}

asyncReadFile();