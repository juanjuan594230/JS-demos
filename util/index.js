// 二分查找  返回true/false
function binarySearch(arr, value) {
  if (!arr || arr.length === 0) {
    return false;
  }
  let start = 0,
      end = arr.length - 1,
      middle = -1;
  while(start <= end) {
    middle = Math.ceil((start + end) / 2);
    const midValue = arr[middle];
    if (midValue > value) {
      end = middle - 1;
    }
    else if (midValue < value) {
      start = middle + 1;
    } 
    else {
      return true;
    }
  }
  return false;
}

// 二分查找 返回最小index
function getIndex(arr, value) {
  let minIndex = -1;
  if (!arr || arr.length === 0) {
    return minIndex;
  }
  let start = 0,
      end = arr.length - 1;
  while(start <= end) {
    const middle = Math.ceil((start + end) / 2);
    const midValue = arr[middle];
    if (midValue > value) {
      end = middle - 1;
    } else if (midValue < value) {
      start = middle + 1;
    } else {
      minIndex = middle;
      end = middle -1;
    }
  }
  return minIndex;
}

// 数组去重  或使用set
function deleteRepeat(target) {
  var result = [target[0]];
  var temp = {};
  temp[target[0]] = true;
  for (var i = 1, targetLen = target.length; i < targetLen; i++) {
    const type = typeof target[i];
    if (!temp[target[i] + '_' + type]) {
      result.push(target[i]);
      temp[target[i] + '_' + type] = true;
    }
  }
  return result;
}

// 生成数组
function createArr(num) {
  const arr = new Array(num);
  for (let i=0; i<num; i++) {
    arr[i] = Math.floor(Math.random() * num + 1);
  }
  return arr;
}

// 求交集
function intersection(nums1, nums2) {
  const set = new Set(nums1);
  return [...new Set(nums2.filter(n => set.has(n)))];
}



