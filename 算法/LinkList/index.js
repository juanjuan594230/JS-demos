const seventh = new LinkList(5, null);
const sixth = new LinkList(4, seventh);
const fifth = new LinkList(4, sixth);
const forth = new LinkList(3, fifth);
const third = new LinkList(3, forth);
const second = new LinkList(2, third);
const first = new LinkList(1, second);

/* 输入一个链表，按链表值从尾到头的顺序返回一个ArrayList */
function getLinkArr(head) {
  if (!head) {
    return;
  }
  const arr = [];
  let node = head.reverse();
  console.log(node);
  while(node) {
    arr.push(node);
    node = node.next;
  }
  return arr;
}
// console.log(getLinkArr(first));

/* 输入一个链表，输出该链表中倒数第k个结点。 */
function getNodeK(head, k) {
  if (!head || typeof k !== 'number') {
    return;
  }
  const arr = [];
  let node = head;
  while(node) {
    arr.push(node);
    node = node.next;
  }
  return arr[arr.length - k];
}

// console.log(getNodeK(first, 1));

function getNodeK1(head, k) {
  const nodeArr = head.getLinkArr();
  const len = nodeArr.length;
  if (!nodeArr.length || k > len) {
    return -1;
  }
  return nodeArr[len - k];
}

// console.log(getNodeK1(first, 5));

/* 给定一个链表，判断是否有环 */
// 思路遍历链表，将遍历到的项存在一个数组中，每遍历到一个，去数组中找是否存在该项，如果存在，则证明有环
/* function hasRing(head) {
  if (!head) {
    return;
  }
  let node = head;
  const arr = [];
  while (node) {
    const temp = arr.filter((item) => {
      return item == node;
    });
    console.log(temp);
    if (!temp.length) {
      arr.push(node);
      node = node.next;
    } else {
      return true;
    }
  }
  console.log(arr);
  return false;
}

console.log(hasRing(first)); */

// console.log(first.hasRing());

/* 给一个链表，若其中包含环，请找出该链表的环的入口结点，否则，输出null。 */
// 思路： 找到第一个重复的节点，就是入口元素
function getEnter(node) {
  if (!node) {
    return node;
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
      return node;
    }
  }
  return null;
}

console.log(getEnter(first));

/* 在一个排序的链表中，存在重复的结点，请删除该链表中重复的结点，重复的结点不保留，返回链表头指针。 例如，链表1->2->3->3->3->4->4->5 处理后为 1->2->5 */
function deleteRepeat(head) {
  if (!head) {
    return head;
  }
  let node = head;
  let previousNode = null;
  let nextNode = null;
  while (node) {
    nextNode = node.next;
    if (node.value === nextNode.value) {
      // 删除节点
      node.next = nextNode.next;
      nextNode = node.next;
    }
    previousNode = node;
    node = nextNode;
  }
}
