function verificar()
{
    
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('input#ano')
    var res = document.querySelector('div#res')
       
    if (fano.value.length == 0 || fano.value>ano){
            window.alert('[ERRO] Verifique os dados e tente novamente.')
        }
    else{
        var sex = document.getElementsByName('radsex') //[0] = Homem [1] = Mulher
        var idade = ano - Number(fano.value)
        var genero 
        var  img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (sex[0].checked){
            genero = 'Homem'
            if(idade>=0 && idade < 11){
                //Criança
                img.setAttribute('src', 'bebegaroto.png')
            }
            else if (idade>=11 && idade < 18){
                //Adolescente
                img.setAttribute('src', 'adolescentegaroto.png')
            }
            else if(idade>=18 && idade<50){
                //Jovem Adulto
                img.setAttribute('src', 'jovemhomem.png')
            }
            else{
                //Idoso
                img.setAttribute('src', 'idoso.png')
            }
        }
        else if(sex[1].checked){
            genero = 'Mulher'
            if(idade>=0 && idade < 11){
                //Criança
                img.setAttribute('src', 'bebegarota.png')
            }
            else if(idade>=11 && idade < 18){
                //Adolescente
                img.setAttribute('src', 'adolescentegarota.png')
            }
            else if(idade>=18 && idade<50){
                //Jovem Adulta
                img.setAttribute('src', 'jovemmulher.png')
            }
            else{
                //Idosa
                img.setAttribute('src', 'idosa.png')
            }
        }
        
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)


    }
}