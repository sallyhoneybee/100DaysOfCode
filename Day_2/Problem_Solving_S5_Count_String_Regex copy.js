// ===========================================================================================
// WRITE A FUNCTION WHICH TAKES IN A STRING AND RETURNS COUNTS OF EACH CHARACTER IN THE STRING
// ===========================================================================================
// Step 5 - Look back and refactor

//  clarifications - not case sensitive, only alphanumeric, no symbols, no spaces

// const charCount = (str) => {
//   let results = {};
//   // loop over string
//   for (let i = 0; i < str.length; i++) {
//     let char = str[i].toLowerCase();
//     // if the char is a number/letter AND a key in the object, add one to count
//     //  if character is not a number/letter, dont do anything
//     if (/[a-z0-9]/.test(char)) {
//       if (results[char] > 0) {
//         results[char]++;
//       } else {
//         // if the char is a number/letter AND not in the object, add it and set value to 1
//         results[char] = 1;
//       }
//     }
//   }
//   return console.log(results);
//   // return object
// };

const charCount = (str) => {
  let results = {};
  // for of loop gives us each character immediately
  for (let char of str) {
    char = char.toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      // accesses results with the character and if its truthy '=' (aka it exists), add 1 to it '++results[char]' or if it is falsy '||' set it as 1
      results[char] = ++results[char] || 1;
    }
  }
  return console.log(results);
};

charCount("hello HI!123");
