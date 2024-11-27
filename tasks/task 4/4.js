const sum = (...args) => {
  let result = 0;
  let i = 0;
  do {
    result += args[i];
    i++;
  } while (i < args.length);
  return result;
};
const a = sum(1, 2, 3);
console.log(a);
