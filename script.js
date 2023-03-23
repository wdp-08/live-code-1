const buah = ["apel", "bluberry", "anggur", "durian", "semangka"];
buah.push("salak");//tambah buah
buah[2] = 'duku';//ganti edit
buah.pop();//hapus terakhir
for (let i = 0; i < buah.length; i++) {
    console.log(buah[i]);
}