const sum = (...args) => {
  let result = 0;
  for (const el of args) {
    result += el;
  }
  return result;
};
const a = sum(1, 2, 3);
console.log(a);
