    var number = document.querySelector('input#numero')
    var lista = document.querySelector('select#area')
    var res = document.querySelector('div#res')
    let valores = []


function adicionar(){
     if(number.value.length == 0){
        alert('Por favor, digite um número.')
    }
    else{
        var n = Number(number.value)
        valores.push(n)
        let item = document.createElement('option')
        item.text = `Valor ${n} adicionado.`  
        lista.appendChild(item)
        
    }
    number.value = ''
    number.focus()

}

function finalizar(){
    if(valores == 0){
        alert('Por favor, adicione um número.')
    }
    else{
        let tot = valores.length
        let max = valores[0]
        let min = valores[0]
        let soma = 0
        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > max){ //Boa maneira de somar e subtrair dentro de informações num select.
                max = valores[pos] 
            }
            if(valores[pos] < min){
                min = valores[pos]
            }
            
        }
        
        let med = soma/tot

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} elementos.</p>`
        res.innerHTML += `<p>O maior valor é ${max}</p>`
        res.innerHTML += `<p>O menor valor é ${min}</p>`
        res.innerHTML += `<p>A soma dos valores é ${soma}</p>`
        res.innerHTML += `<p>A média dos valores é ${med}</p>`
        

    }

}
