let myArray = ['mangga','jambu','pepaya','nanas','anggur']

console.log(myArray)

//akses index tertentu
console.log(myArray[1])

// nambah lokasi awal
myArray.unshift('alpukat') 

// nambah lokasi akhir
myArray.push('manggis') 
console.log(myArray)

//menambah index ke-1
myArray.splice(1,0,'strowberry')//(1: ditambah untuk index 1, 0 : dimulai index 0)
console.log(myArray)

//menambah index ke-0
myArray.splice(0,0,'jambu')
console.log(myArray)

//mengubah/mengganti salah satu buah
myArray[0] = 'jeruk'
console.log(myArray)

//menghapus array paling akhir
myArray.pop() 
console.log(myArray)
