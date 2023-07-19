// Given two strings, write a function to determine if the second string is an anagram of the first.

/**
 * 1 - Understand the problem
 * The characters of the first word will jumble up to form the second word, therefore we gotta compare them
 * Does this include spaces? or spaces and be ignored? Uppper case? symbols?
 * Inputs: 2 words, characters
 * Output: true (if the characters and frequency matches) or false (if the characters and frequency doesnt match)
 * Labels: function - validAnagram, arguments - word1, word2
 */

/**
 * 2 - create concrete examples
 * validAnagram("pan", "nap") - true
 * validAnagram("pans", "nap") - false
 * validAnagram("rooster farm", "master of orr") - true
 * validAnagram(" ", " ") - true
 * validAnagram("?", "!") - true
 * validAnagram("hello?", "hello!") - true
 * Ignore special characters & spaces
 */

/**
 * 3 - break it down
 * remove spaces and special characters from both words and lower case it
 * compare and match the length of both words if false, stop here else if true move onto next step
 * initiate an empty object for each word
 * count the frequency of each character (if it exists add 1 if it doesnt crate the element and add 1) for both words with each individual loops
 * compare if both objects contain the same keys
 * compare if both keys contain the same value
 */

const validAnagram = (word1, word2) => {
  const cleanWord1 = cleanWord(word1);
  const cleanWord2 = cleanWord(word2);

  if (cleanWord1.length !== cleanWord2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let char of cleanWord1) {
    frequencyCounter1[char] = ++frequencyCounter1[char] || 1;
  }

  for (let char of cleanWord2) {
    frequencyCounter2[char] = ++frequencyCounter2[char] || 1;
  }

  for (let key in frequencyCounter1) {
    if (!(key in frequencyCounter2)) {
      return false;
    }

    if (!(frequencyCounter1[key] === frequencyCounter2[key])) {
      return false;
    }
  }

  return true;
};

const cleanWord = (word) => {
  return word.replace(/[^\w]/g, "").toLowerCase();
};

// Test cases
console.log(validAnagram("Helo", "eHHe"));
console.log(validAnagram("pan", "nap"));
console.log(validAnagram("rooster farm", "master of orr"));
console.log(validAnagram(" ", " "));
console.log(validAnagram("?", "!"));

/**
 * 5 - lookback and refactor
 * I am using a regexp which is slightly retrimental for time complexity. Can I use char codes instead?
 * perhaps i can replace the character codes? bu tthat means i need to initiate another llop.
 * So it is either i initiate another loop to clean up the codes or i stick to regexp
 */
