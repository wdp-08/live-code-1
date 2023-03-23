let a = "variable";
const b = "constant";
console.log(a);
console.log(b);
a = "new variable";
console.log(a);
// b = "new constant"; // TypeError: Assignment to constant variable.

let fruits = ["apple", "banana", "orange", "mango", "grapes"];
console.log(fruits);
// tambahkan 1 buah
fruits.push("strawberry");
console.log(fruits);
// edit 1 buah
fruits[0] = "pineapple";
console.log(fruits);
// hapus 1 buah terakhir
fruits.pop();
console.log(fruits);
