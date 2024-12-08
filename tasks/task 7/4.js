const difference = (array1, array2) => {
  const array = [];
  for (const item of array1) {
    if (!array2.includes(item)) {
      array.push(item);
    }
  }
  return array;
};
const array1 = ["Beijing", "Kiev"];
const array2 = ["Kiev", "London", "Baghdad"];
const result = difference(array1, array2);
console.log(result);
