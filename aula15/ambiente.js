var num = [1,2,3,4,5]

console.log(num)

num.push(0) // adicionando elemento

console.log(num)

console.log(num.length) // mostrando o número de elementos no array

//console.log(num.sort()) // deixando em ordem

// printando os elementos do array
for(n=0; n < num.length; n++){
    console.log(num[n])
}

//forma mais simples
for(var n in num){
    console.log(num[n])
}

console.log(num.indexOf(9))