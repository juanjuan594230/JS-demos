// function baz() {
//     console.log(this);   // window
//     console.log('baz');
//     bar();
// }

// function bar() {
//     console.log(this);   // window
//     console.log('bar');
//     foo();
// }

// function foo() {
//     console.log(this);   // window
//     console.log('foo');
// }

// baz();

// this绑定规则


function test () {
    for (let i = 0; i < 4; i++) {
        setTimeout(function () {
        console.log(i);
        }, 0)
    }
}
test();