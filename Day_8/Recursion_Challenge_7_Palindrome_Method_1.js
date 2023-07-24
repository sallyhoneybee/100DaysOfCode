// Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome (reads the same forward and backward). Otherwise it returns false.

const isPalindrome = (str) => {
  //  reverse and compare

  let newStr = "";

  const reverseHelper = (helperStr) => {
    if (helperStr.length === 0) return;

    newStr = newStr + helperStr.slice(-1);

    reverseHelper(helperStr.slice(0, -1));
  };

  reverseHelper(str);

  return newStr === str;
};

console.log(isPalindrome("taocat"));
