const array = [
  { name: "Marcus Aurelius", phone: "+380445554433" },
  { name: "Marina Aurelius", phone: "+380732671683" },
  { name: "Andrei Aurelius", phone: "+380935557456" },
];

function findPhoneByName(name) {
  for (const number of array) {
    if (number.name === name) {
      return number.phone;
    }
  }
  return undefined;
}
console.log(findPhoneByName("Marcus Aurelius"));
console.log(findPhoneByName("Marina Aurelius"));
console.log(findPhoneByName("Andrei Aurelius"));
