/**
 * Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
 * Your solution MUST have the following complexities:
 * Time: O(N)
 */

/**
 * 1. Understanding the Problem
 * - compare if the digits of two integers more than 0 occur at the same frequency
 * - inputs will be two positive integers
 * - my output will be true - if all the digits in the integers occur at the same frequency as each other or false - when the digit or frequency doesnt match.
 * - function will be called sameFrequency with two argumetns int1 and int2
 */

/**
 * 2. Create Concrete Examples
 * sameFrequency(123,321) - true
 * sameFrequency(1223,3212) - true
 * sameFrequency(123,3212) - false
 * sameFrequency(0,0) - null
 * sameFrequency("","") - null
 * sameFrequency(?,!) - null
 */

/** 3. Break it down
 * - make sure integers are positve integers
 * 0 how to loop through integers? convert to string?
 * - check for length too
 * - initiate an object to count the frequency of the first integer
 * - iterate through the first integer to count the frequency of each digit
 * - iterate through the second interger to see if its digit matches any in the frequency counter
 * - if the digit match, minus 1 (to use this we must make sure the length is the same), if not return false
 */

const sameFrequency = (int1, int2) => {
  if (!isPositiveInteger(int1) || !isPositiveInteger(int2)) return false;

  int1 = int1.toString();
  int2 = int2.toString();

  if (int1.length !== int2.length) return false;

  let frequencyCounter = {};

  for (let digit of int1) {
    frequencyCounter[digit] = ++frequencyCounter[digit] || 1;
  }

  for (let digit of int2) {
    if (!(digit in frequencyCounter)) return false;
    frequencyCounter[digit] - 1;
  }
  return true;
};

const isPositiveInteger = (int) => {
  if (int > 0 && Number.isInteger(int)) {
    return true;
  }
};

console.log(sameFrequency(1233, 3321));
