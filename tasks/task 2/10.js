const book = new Map();

book.set("Marcus", "+380445554433");
book.set("Marina", "+380732671683");
book.set("Andrei", "+380935557456");

function findPhoneByName(name) {
  return book.get(name);
}

console.log(findPhoneByName("Marcus"));
console.log(findPhoneByName("Marina"));
console.log(findPhoneByName("Andrei"));
