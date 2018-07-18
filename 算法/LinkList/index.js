class LinkList {
  constructor(value, next) {
    this.value = value;
    this.next = next || null;
  }

  // 反转链表
  reverse() {
    let node = this;
    if (!node || !node.next) {
      return;
    }
    let previousNode = null;
    let nextNode = null;
    while(node) {
      nextNode = node.next;
      node.next = previousNode;
      previousNode = node;
      node = nextNode;
    }
  }
}

// const third = new LinkList(3, null);
// const second = new LinkList(2, third);
// const first = new LinkList(1, second);

/* 第一版 将链表节点保存在一个数组，然后再逆序给节点的next赋值 */
// function reverse1(node) {
//   const arr = [node];
//   if (!node || !node.next) {
//     return;
//   }
//   while(node.next) {
//     arr.push(node.next);
//     node = node.next;
//   }
//   const len = arr.length
//   for (let i = len - 1; i >= 0; i--) {
//     if (i === 0) {
//       arr[i].next= null;
//     }
//     arr[i].next = arr[i-1];
//   }
// }

// reverse(first);
// console.log(first);
// console.log(second);
// console.log(third);

/* 第二版  试试不用开辟多余空间的方法 */
// 1>2>3
// function reverse2(node) {
//   if (!node || !node.next) {
//     return;
//   }
//   let previousNode = null;
//   let nextNode = null;
//   while(node) {
//     nextNode = node.next;
//     node.next = previousNode;
//     previousNode = node;
//     node = nextNode;
//   }
// }

// const fifth = new LinkList(5, null);
// const forth = new LinkList(4, fifth);
// const third = new LinkList(3, forth);
// const second = new LinkList(2, third);
// const first = new LinkList(1, second);
const second = new LinkList(2, null);
const first = new LinkList(1, second);

first.reverse();
// console.log(first);
// console.log(second);
// console.log(third);
// console.log(forth);
// console.log(fifth);

