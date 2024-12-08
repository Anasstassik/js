const pipe = (...fns) => {
  for (const f of fns) {
    if (typeof f !== "function") {
      throw new Error("All args should be functions");
    }
    return (x) => fns.reduce((v, f) => f(v), x);
  }
};
const inc = (x) => ++x;
const twice = (x) => x * 2;
const cube = (x) => x ** 3;

try {
  const p1 = pipe(inc, twice, cube);
  const f1 = p1(5);
  console.log(f1);
} catch (e) {
  console.error(e);
}

try {
  const p2 = pipe(inc, inc);
  const f2 = p2(7);
  console.log(f2);
} catch (e) {
  console.error(e);
}

try {
  const f3 = pipe(inc, 7, cube);
} catch (e) {
  console.error(e);
}
