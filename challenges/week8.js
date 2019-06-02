const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  if (nums.includes(n) == false) {
    return null;
    };
  if (n == nums[nums.length-1]) {
    return null;
  }
  const i = nums.indexOf(n);
  return nums[(i+1)];
};

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");
  const onesZeros = {
    1: 0,
    0: 0
  };
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "1") {
      onesZeros[1]++;
    }
    if (str[i] === "0") {
      onesZeros[0]++; 
    }
  } return onesZeros;
};

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");
  n = n + "";
  return Number(n.split("").reverse().join(""));
};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  let sum = 0;
  for (i = 0; i < arrs.length; i++) {
    for (x = 0; x < arrs[i].length; x++) {sum += arrs[i][x]}
  }; return sum;
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  if (arr.length < 2) {return arr};
  [arr[0], arr[arr.length -1]] = [arr[arr.length -1], arr[0]];
  return arr;
};


const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  // Your code here!
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};
