function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //Bom dia!!!
        img.src= 'fotomanha.png'
        document.body.style.background = '#fbc75a'
    } else if (hora >= 12 && hora < 18){
        //Boa tarde!!!
        img.src= 'fototarde.png'
        document.body.style.background = '#d25a0c'
    } else {
        //Boa Noite!
        img.src= 'fotonoite.png'
        document.body.style.background = '#28221f'
    }
}