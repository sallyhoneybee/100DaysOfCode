// ===========================================================================================
// WRITE A FUNCTION WHICH TAKES IN A STRING AND RETURNS COUNTS OF EACH CHARACTER IN THE STRING
// ===========================================================================================
// Step 2 - Concrete Examples

// 1. Start with simple examples
charCount("aaaa"); // {a: 4}
charCount("aabbcc"); // {a: 2, b:2, c:2}
//  could ask questions like should I incldue a counter for letters that are not there like {b:0,c: o} etc. it will make things easier in the sense where the key is there we dont need to add it in, we just need to increment it

// 2. Progress to more complex examples
charCount("my phone number is 182763");
//  should we count for spaces? symbols? numbers? ignore uppercase? or are upper and lowercase one and the same?

// 3. Explore examples with empty inputs
charCount(" ");
// what should we return?

// 4. Explore examples with invalid inputs, understanding edge cases
// what is considered an invalid input? null? undefined? number?
