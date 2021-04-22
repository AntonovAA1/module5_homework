
// Задание 2
let X = {};
console.log (typeof X);

if (typeof X === 'string') {
   console.log (X + " - строка")
}
else if (typeof X === 'number') {
    console.log (X + " - число")
}
else if (typeof X === 'boolean') {
    console.log (X + " - логический тип")
}
else {
    console.log ("Тип X не определён")
}
