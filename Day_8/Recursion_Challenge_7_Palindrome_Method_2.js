// Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome (reads the same forward and backward). Otherwise it returns false.
// too many assignments, spcae complexity isnt great i guess

const isPalindrome = (str) => {
  // start from each end, see if the ends match but i have to include more logic to check if the string is odd ro even before i can apply middle like that
  if (str.length === 1) return true;
  if (str.length === 2) return str[0] === str[1];
  if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1));
  return false;
};

console.log(isPalindrome("taccat"));
