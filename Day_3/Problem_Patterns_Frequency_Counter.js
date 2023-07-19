const same = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  const arr1Sorted = arr1.sort();
  const arr2Sorted = arr2.sort();

  for (i = 0; i < arr1Sorted.length; i++) {
    if (arr2Sorted[i] != arr1Sorted[i] ** 2) {
      return false;
    }
  }
  return true;
};

console.log(same([1, 3, 2], [4, 1, 9]));
