// Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

const countUniqueValues = (arr) => {
  // if i = j then j + i but if j > i then i + 1, max j is 9
  let i = 0;
  let j = 1;

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
};

console.log(countUniqueValues([-1, -1, 1, 1, 2, 3, 4, 5, 5]));
