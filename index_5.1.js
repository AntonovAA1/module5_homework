// Задание 1
let nam = prompt ("Please enter the value:");
let namb = +nam;
// console.log (typeof namb);

let nambB = Boolean (namb);
// console.log (nambB);

if (nambB) { 
    if (namb%2 == 0) {
        alert ("You entered a number: " + namb + " (even number)")
    }
    else {
        alert ("You entered a number: " + namb + " (uneven)")
    }
}
else if (namb == 0) {
    alert ("You entered a number: " + namb + " (even number)")
 } 
else {
    alert ("Oops, I think you made a mistake")
}
