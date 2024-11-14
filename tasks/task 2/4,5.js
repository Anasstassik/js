function range(start, end) {
  let array1 = [];
  for (let x = start; x <= end; x++) {
    res.push(x);
  }
  return array1;
}
console.log(range(15, 30));

function range(start, end) {
  let array2 = [];
  for (let y = start; y <= end; y += 2) {
    res.push(y);
  }
  return array2;
}
console.log(range(15, 30));
