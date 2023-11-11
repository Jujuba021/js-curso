function contar(){
    let inicio = document.querySelector('input#inicio')
    let fim = document.querySelector('input#fim')
    let passo = document.querySelector('input#passo')
    let res = document.querySelector('div#res')

    if(fim.value.length == 0 || passo.value.length == 0){
        window.alert('ERRO! Por favor, digite os valores.')
    }
    else{
        res.innerHTML = 'Contando: '

        let ini = Number(inicio.value)
        let fi = Number(fim.value)
        let pas = Number(passo.value)

        if(ini < fi){
        //Contagem crescente:
        for(var c = ini ; c <= fi ; c = c+= pas){
            res.innerHTML += `${c} \u{1F449}`
        }   
        res.innerHTML += `\u{1F3C1}` 
    }
        else{
        //Contagem decrescente
            for(var d = ini ; d >= fi ; d = d-= pas){
                res.innerHTML += `${d} \u{1F449}`
            }
            res.innerHTML += `\u{1F3C1}` 
        }
    }
    }
