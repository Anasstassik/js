const sum = (...args) => {
  let result = args.reduce((acc, item) => acc + item, 0);
  return result;
};
const a = sum(1, 2, 3);
console.log(a);
