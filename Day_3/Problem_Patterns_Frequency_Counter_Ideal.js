// conditions to check for - arrays have the same number of elements | the each element in arr1 has a corresponding element in arr2 that is its exponent | each element in arr1 corresponds to an individual element in arr2, no repeats or sharing |

const same = (arr1, arr2) => {
  // immediately reject if the length of the two arrays aren't the same
  if (arr1.length !== arr2.length) {
    return false;
  }

  // construct an object that creates a profile & counts the frequency of a value
  // initiate an empty object

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  // count the occurance of each value in the first array with a loop
  for (let value of arr1) {
    frequencyCounter1[value] = ++frequencyCounter1 || 1;
  }

  // count the occurance of each value in the second array with a loop
  for (let value of arr1) {
    frequencyCounter2[value] = ++frequencyCounter2 || 1;
  }

  // compare if the value in frequencyCounter1 is an exponent of frequencyCounter2 by matching its keys
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }

    // check if the values (frequency of occurance) of the corresponding keys are the same
    if (!(frequencyCounter1[key] === frequencyCounter2[key ** 2])) {
      return false;
    }
  }
  return true;
};

console.log(same([1, 3, 2], [4, 1, 9]));
