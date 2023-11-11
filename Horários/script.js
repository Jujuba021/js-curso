function iniciar(){
var msg = document.querySelector('div#msg')
var img = document.querySelector('img#imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas.`

if (hora>=0 && hora<=12){
    msg.innerHTML += '<p>Bom dia!</p>'
    img.src = 'fotomanha.png'
    document.body.style.background = '#e2cd9f'
}
else if (hora>12 && hora<19){
    msg.innerHTML += '<p>Boa tarde!</p>'
    img.src = 'fototarde.png'
    document.body.style.background = '#b9846f'
}
else{
    msg.innerHTML += '<p>Boa noite!</p>'
    img.src = 'fotonoite.png'
    document.body.style.background = '#515154'
}
}
