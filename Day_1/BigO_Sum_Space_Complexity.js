const sum = (array) => {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
};

// O(1) Space - 2 variables total and i
