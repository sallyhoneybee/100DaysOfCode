const logAtMost5 = (n) => {
  for (let i = 1; i <= Math.min(5, n); i++) {
    console.log(i);
  }
};

logAtMost5(9);
logAtMost5(3);

// O(1) even if n grows, it doesnt matetr, we are taking the min
