/*
    using two pointer technique to solve the question.
    Assumtion Array is sorted.
    If you given unsorted arry as a input then sort the array First
*/

let arr1 = [1, 21, 3, 4, 5, 6];
arr1.sort((a, b) => a - b);
console.log(arr1);
let arr2 = [3, 4, 5, 6, 7];
let i = 0;
let j = 0;
let ins = [];

while (i < arr1.length && j < arr2.length) {
  if (arr1[i] === arr2[j]) {
    ins.push(arr1[i]);
    i++;
    j++;
  } else if (arr1[i] < arr2[j]) {
    i++;
  } else {
    j++;
  }
}

console.log(ins.length);
