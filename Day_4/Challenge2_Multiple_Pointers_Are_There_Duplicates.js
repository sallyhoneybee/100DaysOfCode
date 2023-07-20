/**
 * Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.
 * You can solve this using the frequency counter pattern OR the multiple pointers pattern.
 */

/**
 * 1. Understanding the Problem
 * - compare if any of the arguments passed contains duplicates (therefore only need the first match to occur)
 * - inputs will be anything (string, integer, blank, symbol)
 * - questions -> exclude boolean null undefined? -> if i have 1 and "1" is this true or false? do we take into account data type?
 * - my output will be true - if at least one duplicate exists or false - if no duplicates exist and if the arguments provided is less than 2
 * - function will be called areThereDuplicates with variable number of arguments of no specific data type.
 */

/**
 * 2. Create Concrete Examples
 * areThereDuplicates(1,1) - true
 * areThereDuplicates(1,2,3,4,5,1) - true
 * areThereDuplicates(123,231,123) - true
 * areThereDuplicates("a", "b", "a") - true
 * areThereDuplicates("hello", "hello", "a") - true
 * areThereDuplicates("hello", "hello?", "a") - false
 * areThereDuplicates("hello", "hello?", "a", 1, 5, 1) - true
 * areThereDuplicates("","") - true
 * areThereDuplicates(?,!) - false
 * areThereDuplicates(?,?) - true
 * areThereDuplicates(1) - null
 */

/** 3. Break it down
 * - make sure that there are 2 or more arguments
 * - put the arguments into an array (no need args is already an array)
 * - define i = 0 as the first pointer
 * - loop through the array of arguments comparing the i index vs the j index
 * - return true at the first match
 */

const areThereDuplicates = (...args) => {
  if (args.length < 2) return null;
  let i = 0;

  for (j = 1; j < args.length; j++) {
    if (args[i] === args[j]) {
      return true;
    }
  }
  return false;
};

console.log(areThereDuplicates(false, false));
