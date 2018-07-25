class LinkList {
  constructor(value, next) {
    this.value = value;
    this.next = next || null;
  }

  // 反转链表
  reverse() {
    let node = this;
    if (!node || !node.next) {
      return node;
    }
    let previousNode = null;
    let nextNode = null;
    while(node) {
      nextNode = node.next;
      node.next = previousNode;
      previousNode = node;
      node = nextNode;
    }
    return previousNode;
  }

  // 将链表转换成数组
  getLinkArr() {
    let node = this;
    const arr = [];
    while (node) {
      arr.push(node);
      node = node.next;
    }
    return arr;
  }

  // 获取链表长度
  getLength() {
    let node = this;
    const arr = node.getLinkArr();
    return arr.length;
  }

  // 是否有环
  hasRing() {
    let node = this;
    if (!node) {
      return;
    }
    const arr = [];
    while (node) {
      const temp = arr.filter((item) => {
        return item == node;
      });
      if (!temp.length) {
        arr.push(node);
        node = node.next;
      } else {
        return true;
      }
    }
    return false;
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
// const second = new LinkList(2, null);
// const first = new LinkList(1, second);

// first.reverse();
// console.log(first);
// console.log(second);
// console.log(third);
// console.log(forth);
// console.log(fifth);