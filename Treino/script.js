function calcular(){
    let number = document.querySelector('input#numero')
    let res = document.querySelector('select#tabuada')

    if(number.value.length == 0){
        alert('ERRO: Por favor, digite um número válido.')
    }
    else{
        var n = Number(number.value)
        var c = 1
        res.innerHTML = ''
        while(c<=10){
            let item = document.createElement('option')
            item.text = `${n} X ${c} = ${n*c}`
            res.appendChild(item)
            c++
        }
    }
}