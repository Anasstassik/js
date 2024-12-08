const compose = (...fns) => {
  const handlers = [];

  const composed = (x) => {
    let result = x;

    try {
      for (const fn of fns.reverse()) {
        result = fn(result);
      }
      return result;
    } catch (error) {
      for (const handler of handlers) {
        handler(error);
      }
      return null;
    }
  };

  composed.on = (name, handler) => {
    if (name === "error") handlers.push(handler);
  };
  return composed;
};

const inc = (x) => ++x;
const twice = (x) => x * 2;
const cube = (x) => x ** 3;

try {
  const c1 = compose(inc, twice, cube);
  const f = c1(5);
  console.log(f);
} catch (e) {
  console.error(e);
}

try {
  const c2 = compose(inc, inc);
  const f1 = c2(7);
  console.log(f1);
} catch (e) {
  console.error(e);
}

try {
  const с3 = compose(inc, twice, 6);
  const f2 = с3(8);
  console.log(f2);
} catch (e) {
  console.error(e);
}
