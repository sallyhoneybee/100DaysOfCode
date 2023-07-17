const printAllPairs = (n) => {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
};

printAllPairs(10);

// O(n^2) - runtime roughly grows at the rate of n^2
