// Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

const countUniqueValues = (arr) => {
  // if i = j then j + i but if j > i then i + 1, max j is 9
  let i = 0;
  let j = 1;

  if (arr.length === 0) {
    return 0;
  }

  while (j < arr.length) {
    if (arr[i] === arr[j]) {
      j++;
    } else {
      i++;
      arr[i] = arr[j];
      j++;
    }
  }

  return i > 0 ? i + 1 : 0;
  // return i > 0 ? i + 1 : 0; instead of this, think about the time when i = 0 , and thats only when the array is empty. this ternary operator will fail when array has length of 1 because i will still be 0.
};

console.log(countUniqueValues([-1, -1, 1, 1, 2, 3, 4, 5, 5]));
