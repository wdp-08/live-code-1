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
console.log(dataBuah)
// edit
function edit_buah(index, array, data){
    for(let i = 0; i<array.length; i++){
        array[index] = data;
    }
}