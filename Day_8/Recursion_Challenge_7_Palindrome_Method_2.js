// Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome (reads the same forward and backward). Otherwise it returns false.
// too many assignments, spcae complexity isnt great i guess

const isPalindrome = (str) => {
  // start from each end, see if the ends match but i have to include more logic to check if the string is odd ro even before i can apply middle like that
  let middle = Math.round(str.length % 2);

  let i = 0;
  let j = str.length - 1;
  palindrome = false;

  const palindromeHelper = (helperStr) => {
    if (i === middle) return;

    if (helperStr[i] !== helperStr[j]) return (palindrome = false);

    //  either add j and i or slice helperStr
    i++;
    j--;
    palindromeHelper(helperStr);

    palindrome = true;
  };

  palindromeHelper(str);

  return palindrome;
};

console.log(isPalindrome("taccat"));
