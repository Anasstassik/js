function average(a, b) {
  return (a + b) / 2;
}

function square(x) {
  return x * x;
}

function cube(x) {
  return x ** 3;
}

function calculate() {
  const array = [];
  for (let i = 0; i <= 9; i++) {
    const a = average(square(i), cube(i));
    array.push(a);
  }
  return array;
}
console.log(calculate());
