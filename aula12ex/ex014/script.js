function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var hora2 = data.getMinutes()
   
    msg.innerHTML = `Agora são ${hora}:${hora2}.`
    if(hora >= 0 && hora < 12){
        //bom dia
        img.src = 'manha.png'
        document.body.style.background = 'blue'
    } else if(hora >= 12 && hora < 18){
        // tarde
        img.src = 'tarde.png'
        document.body.style.background = 'yellow'
    }else{
        //noite
        img.src = 'noite.png'
        document.body.style.background = 'black'
    }
}
