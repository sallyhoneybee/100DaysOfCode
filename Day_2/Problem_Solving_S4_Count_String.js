// ===========================================================================================
// WRITE A FUNCTION WHICH TAKES IN A STRING AND RETURNS COUNTS OF EACH CHARACTER IN THE STRING
// ===========================================================================================
// Step 4 - Solve/simplify

//  clarifications - not case sensitive, only alphanumeric, no symbols, no spaces

// const charCount = (str) => {
//   // do something
//   // return an object with keys that are lowercase alphanumeric characters in the string, values should be the counts for those characters
// };
const charCount = (str) => {
  // make object to be returned at the end
  let results = {};
  // loop over string, for each character...
  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();
    // if the char is a number/letter AND a key in the object, add one to count, but ifyou dk how to check for alphanumeric then do it simple - count all characters
    if (results[char] > 0) {
      results[char]++;
    } else {
      results[char] = 1;
    }
  }
  return console.log(results);
  // if the char is a number/letter AND not in the object, add it and set value to 1
  //  if character is not a number/letter, dont do anything
  // return object
};

charCount("hello HI!");
