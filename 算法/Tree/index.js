class Binarytree {
  constructor(value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
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
function preorder(root) {
  if (!root) {
    return;
  }
  console.log(root.value);
  if (root.left) {
    preorder(root.left);
  }
  if (root.right) {
    preorder(root.right);
  }
}

// 中序遍历二叉树
function inOrder(root) {
  if (!root) {
    return;
  }
  if (root.left) {
    inOrder(root.left);
  }
  console.log(root.value);
  if (root.right) {
    inOrder(root.right);
  }
}

// 后序遍历二叉树
function nextOrder(root) {
  if (!root) {
    return;
  }
  if (root.left) {
    nextOrder(root.left);
  }
  if (root.right) {
    nextOrder(root.right);
  }
  console.log(root.value);
}

// ABDHIEJCFKG
preorder(A);
// // HDIBEJAFKCG
// inOrder(A);
// // HIDJEBKFGCA
// nextOrder(A);

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


