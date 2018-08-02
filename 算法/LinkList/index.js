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

function FindKthToTail(head, k)
{
    if (!head || typeof k !== 'number' || k <= 0) {
        return null;
    }
    let pre = head,
        next = head;
    while (k - 1 > 0) {
        if (!pre.next) {
          return null;
        }
        pre = pre.next;
        k--;
    }
    while (pre.next) {
        pre = pre.next;
        next = next.next;
    }
    return next;
}

// console.log(FindKthToTail(first, 1));

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


function EntryNodeOfLoop(pHead)
{
    if (!pHead) {
        return pHead;
    }
    const set = new Set();
    while (pHead) {
        const flag = set.has(pHead);
        if (!flag) {
            set.add(pHead);
            pHead = pHead.next;
        } else {
            return pHead;
        }
    }
    return null;
}

// console.log(getEnter(first));

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

// 合并两个有序链表
const d = new LinkList(8, null);
const c = new LinkList(7, d);
const b = new LinkList(3, c);
const a = new LinkList(1, b);

const _e = new LinkList(10, null)
const _d = new LinkList(9, _e);
const _c = new LinkList(7, _d);
const _b = new LinkList(4, _c);
const _a = new LinkList(2, _b);
function Merge(pHead1, pHead2)
{
    // 一个为null的情况
    if (!pHead1) {
        return pHead2;
    } else if (!pHead2) {
        return pHead1;
    }
    let mergeHead = null;
    if (pHead1.value <= pHead2.value) {
      mergeHead = pHead1;
      mergeHead.next = Merge(pHead1.next, pHead2);
    } else {
      mergeHead = pHead2;
      mergeHead.next = Merge(pHead1, pHead2.next);
    }
    return mergeHead;
}

console.log(Merge(a, _a));
