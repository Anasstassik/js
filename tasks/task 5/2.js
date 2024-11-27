const array = () => {
  const data = [];
  const getByInd = (i) => data[i];
  getByInd.push = (value) => data.push(value);
  getByInd.pop = () => data.pop();
  return getByInd;
};

const arr = array();

arr.push("first");
arr.push("second");
arr.push("third");

console.log(arr(0));
console.log(arr(1));
console.log(arr(2));

console.log(arr.pop());
console.log(arr.pop());
console.log(arr.pop());

console.log(arr.pop());
