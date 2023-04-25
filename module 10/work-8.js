let myMap = new Map();
myMap.set(1, "number");
myMap.set("number", 2);
myMap.set(true, false);
for (let [key, value] of myMap) {
  console.log(`Ключ-${key}, Значение-${value} `);
}
