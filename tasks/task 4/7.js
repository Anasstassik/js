const ages = (persons) => {
  const result = {};
  for (const person in persons) {
    const dates = persons[person];
    result[person] = dates.died - dates.born;
  }
  return result;
};
const persons = {
  lenin: { born: 1870, died: 1924 },
  mao: { born: 1893, died: 1976 },
  gandhi: { born: 1869, died: 1948 },
  hirohito: { born: 1901, died: 1989 },
};
console.log(ages(persons));
