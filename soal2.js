let array = []
let arrayBil = []
let arrayA =[]

let bilangan = (angka) => {
    if (parseInt(angka) == angka) {
        array.push('bulat')
    }
    
    if (angka < 0) {
        array.push('negatif')
    } else {
        array.push('cacah')
    }
    
    if (angka == 0) {
        array.push('nol')
    } else {
        array.push('asli')
    }
    
    if (angka%2 == 0) {
        array.push('genap')
    } else {
        array.push('ganjil')
    }

    for (i=1; i<=angka; i++) {
        arrayBil.push(angka%i)
        arrayA = arrayBil.slice(1, arrayBil.length-1)
    }

    if (arrayA.includes(0)) {
        array.push('komposit')
    } else {
        array.push('prima')
    }
    
    return array
}

console.log(bilangan(19))