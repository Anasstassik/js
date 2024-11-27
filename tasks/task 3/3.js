const Num = (ip = "192.168.1.10") => {
  const reduce = (acc, index) => (acc << 8) + index;
  return ip
    .split(".")
    .map((index) => Number(index))
    .reduce(reduce, 0);
};
console.log(Num());
