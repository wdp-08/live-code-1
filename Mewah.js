let myArray = ["anggur", "ceri", "rambutan", "pepaya", "durian"];
console.log(myArray);

//akses index tertentu
console.log(myArray[1]);

// Tambah lokasi awal
myArray.unshift("leci");

// Tambah lokasi akhir
myArray.push("mangga");
console.log(myArray);

//Tambah index ke-1
myArray.splice(1, 0, "strowberry"); //(1: ditambah untuk index 1, 0 : dimulai index 0)
console.log(myArray);

//Tambah index ke-0
myArray.splice(0, 0, "ceri");
console.log(myArray);

myArray[0] = "anggur"; //Mengedit buah
console.log(myArray);

myArray.pop(); //Hapus array belakang
console.log(myArray);

myArray.shift(); //Hapus array depan

//menghapus array index tertentu
myArray.splice(2, 1); //(2 : menghapus inde-2, 1 : dihapus 1 buah)
console.log(myArray);
