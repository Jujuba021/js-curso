function calcular(){
    var numero = document.querySelector('input#numero')
    var res = document.querySelector('select#seltab')

    if(numero.value.length == 0){
        alert('Por favor, digite um número!')
    }
    else{
        var n = Number(numero.value)
        var c = 1
        res.innerHTML = ''
        while (c <= 10){
            let item = document.createElement('option')
            item.text = `${n} X ${c} = ${n*c}`
            res.appendChild(item)
            c++
        }
    }
}