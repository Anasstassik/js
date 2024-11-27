const sum = (...args) => {
  let result = 0;
  let i = 0;
  while (i < args.length) {
    result += args[i];
    i++;
  }
  return result;
};
const a = sum(1, 2, 3);
console.log(a);
