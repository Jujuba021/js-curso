let num = [5,4,3,2,1]
num.push(0)

console.log(`Nosso array é ${num}.`)
console.log(num[0])
console.log(num[1])
console.log(num[2])
console.log(num[3])
console.log(num[4])

let pos = num.indexOf(2)
if(pos == -1){
    console.log('Valor não encontrado!')
}
else{
console.log(`O valor de pos está na ${pos} posição.`)
}