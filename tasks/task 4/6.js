const max = (array) => {
  let result = 0;
  for (const row of array) {
    for (const element of row) {
      if (element > result) {
        result = element;
      }
    }
  }
  return result;
};
const m = max([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);
console.log(m);
