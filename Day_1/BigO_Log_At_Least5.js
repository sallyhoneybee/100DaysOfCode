const logAtLeast5 = (n) => {
  for (let i = 1; i <= Math.max(5, n); i++) {
    console.log(i);
  }
};

logAtLeast5(9);
logAtLeast5(3);

// O(n)
