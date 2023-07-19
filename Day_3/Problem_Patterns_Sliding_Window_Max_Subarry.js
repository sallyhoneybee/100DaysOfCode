// Write a function which accepts an array of integers and a number called n. The function should calculate the max sum of n consecutive elements in teh array

// create a variable that stores the max value so you can compare against it
// create a variable to store the current numbers your summing to compare that against max
// what if num is a decimal?

const maxSubarraySum = (arr, n) => {
  if (arr.length < n) return null;

  let maxSum = 0;
  let tempSum = 0;

  for (let i = 0; i < n; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;
  for (let i = n; i < arr.length; i++) {
    tempSum = tempSum - arr[i - n] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
};

console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));
