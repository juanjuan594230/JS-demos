class Binarytree {
  constructor(value, left, right) {
    this.value = value;
    this.left = left || null;
    this.right = right || null;
  }
}

const K = new Binarytree('11', null, null);
const J = new Binarytree('10', null, null);
const I = new Binarytree('9', null, null);
const H = new Binarytree('8', null, null);
const G = new Binarytree('7', null, null);
const F = new Binarytree('6', null, K);
const E = new Binarytree('5', null, J);
const D = new Binarytree('4', H, I);
const C = new Binarytree('3', F, G);
const B = new Binarytree('2', D, E);
const A = new Binarytree('1', B, C);

// 递归
// 先序遍历二叉树
// function preorder(root) {
//   if (!root) {
//     return;
//   }
//   console.log(root.value);
//   if (root.left) {
//     preorder(root.left);
//   }
//   if (root.right) {
//     preorder(root.right);
//   }
// }

function preorder(root) {
  if (!root) {
    return;
  }
  console.log(root.value);
  preorder(root.left);
  preorder(root.right);
}

// 中序遍历二叉树
// function inOrder(root) {
//   if (!root) {
//     return;
//   }
//   if (root.left) {
//     inOrder(root.left);
//   }
//   console.log(root.value);
//   if (root.right) {
//     inOrder(root.right);
//   }
// }

// 后序遍历二叉树
// function nextOrder(root) {
//   if (!root) {
//     return;
//   }
//   if (root.left) {
//     nextOrder(root.left);
//   }
//   if (root.right) {
//     nextOrder(root.right);
//   }
//   console.log(root.value);
// }

// ABDHIEJCFKG
preorder(A);
// // HDIBEJAFKCG
// inOrder(A);
// // HIDJEBKFGCA
// nextOrder(A);

// 二叉树的高度
function getTreeHeight(root) {
  if (!root) {
    return 0;
  }
  const m = getTreeHeight(root.left);
  const n = getTreeHeight(root.right);
  return m > n ? m + 1 : n + 1;
}

console.log(getTreeHeight(A)); 
console.log(A);

// 复制二叉树
function deepClone(root, obj = {}) {
  for (let attr in root) {
    if (root.hasOwnProperty(attr)) {
      if (typeof root[attr] === 'object' && root[attr]) {
        obj[attr] = {};
        deepClone(root[attr], obj[attr]);
      } else {
        obj[attr] = root[attr];
      }
    }
  }
  return obj;
}
const obj = deepClone(A, {});
// console.log(obj);
// preorder(obj);

function clone(root, newRoot) {
  if (!root) {
    newRoot = null;
    return;
  }
  newRoot.value = root.value;
  newRoot.left = root.left ? new Binarytree() : null;
  newRoot.right = root.right ? new Binarytree() : null;
  clone(root.left, newRoot.left);
  clone(root.right, newRoot.right);
}

let _A = new Binarytree();
clone(A, _A);
console.log(_A);

/* 二叉树上寻找节点第K小的数 */


// console.log(A);
// console.log(B);
// console.log(C);
// console.log(D);
// console.log(E);
// console.log(F);
// console.log(G);
// console.log(H);
// console.log(I);
// console.log(J);
// console.log(K);


