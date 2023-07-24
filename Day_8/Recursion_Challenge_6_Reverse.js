// Write a recursive function called reverse which accepts a string and returns a new string in reverse.

const reverse = (str) => {
  let newStr = "";

  const reverseHelper = (helperStr) => {
    if (helperStr.length === 0) return;

    newStr = newStr + helperStr.slice(-1);

    reverseHelper(helperStr.slice(0, -1));
  };

  reverseHelper(str);

  return newStr;
};

console.log(reverse("hello"));
