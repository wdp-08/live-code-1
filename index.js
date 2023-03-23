const buahLuarKota = ['Durian', 'Rambutan', 'Pisang Kepok', 'Manggis', 'Salak']
let user = {
    name: "Rifan",
    age: 21
}
console.log(user)
console.log(buahLuarKota)
let dataBuah = ['Jeruk', 'Mangga', 'Pepaya', 'Durian', 'Apel']
console.log(dataBuah)


// add
create_new_buah('pisang', dataBuah)
function create_new_buah(data, array){
    return array.push(data)
}
console.log('add', dataBuah)
// edit
function edit_buah(index, array, data){
    for(let i = 0; i<array.length; i++){
        array[index] = data;
    }
}
edit_buah(2, dataBuah, 'Jeruk Macan')
console.log('Edit', dataBuah)


// hapus
function delete_buah(array){
    return array.pop()
}

delete_buah(dataBuah)
console.log('Delete', dataBuah)