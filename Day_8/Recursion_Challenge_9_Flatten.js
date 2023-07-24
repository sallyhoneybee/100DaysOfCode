// Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.

// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3
// [[4,5]]

const flatten = (arr) => {
  let finalArr = [];

  const flattenHelper = (helperArr) => {
    if (helperArr.length === 0) return;

    if (typeof helperArr[0] !== "object") {
      finalArr.push(helperArr[0]);
    } else {
      flattenHelper(helperArr[0]);
    }

    flattenHelper(helperArr.slice(1));
  };

  flattenHelper(arr);

  return finalArr;
};

console.log(flatten([1, [2, [3, 4], [[5]]]]));
