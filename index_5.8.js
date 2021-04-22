
// Задание 8
let map = new Map();
map.set(8, "number"); 
map.set(true, "boolean");
map.set('Nan', 25); 
map.set(11, "555");
map.set("apple", "green");

console.log ("Объект содержит: " + map.size + " элементов");

for (let [key, value] of map.entries()) {
    console.log(`Ключ - ${key}, Значение - ${value}`)
  }