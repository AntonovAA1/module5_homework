
// Задание 6
let arr = [0, 0, 0, 0, 0, NaN];
tr = 0;
for (let i = 0; i<arr.length-1; i++) {
   if (arr[i] === arr[i+1]) {
    tr = tr+1;
   }
}
    if (tr == arr.length-1)   {
    console.log ("true") 
    } else {
        console.log ("folse")
    }
