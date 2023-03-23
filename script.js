//Membuat array berisi 5 buah-buahan
const fruits = ["Apel", "Belimbing", "Chery", "Durian", "Jambu"];
let fruit = ["Durian", "Apel", "Anggur", "Kurma", "Lemon"];

//Menambah satu buah
fruits.push("Melon");
fruit.push("Melon");
console.log(fruits, fruit);

//Kurangi satu buah
fruits.pop();
fruit.pop();
console.log(fruits, fruit);

//Mengubah satu buah
fruits[2] = "Semangka";
fruit[2] = "Semangka";
console.log(fruits, fruit);