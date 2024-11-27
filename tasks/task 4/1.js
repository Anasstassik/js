const sum = (...args) => {
  let result = 0;
  for (let i = 0; i < args.length; i++) {
    result += args[i];
  }
  return result;
};
const a = sum(1, 2, 3);
console.log(a);
