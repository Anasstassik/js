function fn() {
  const obj1 = { name: "Marina" };
  let obj2 = { name: "Andrei" };

  obj1.name = "Marinochka";
  obj2.name = "Andrysha";
  //бо ми змінюємо посилання на об'єкт

  //obj1 = { name: "Marinka" };
  obj2 = { name: "Andreika" };
  //ми не можемо змінити сам об'єкт, бо константу не змінити

  return { obj1, obj2 };
}
console.log(fn());

function createUser(name, city) {
  return { name, city };
}
console.log(createUser("Marcus Aurelius", "Roma"));
