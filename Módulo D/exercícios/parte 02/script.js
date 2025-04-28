function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    var seg = data.getSeconds()

    msg.innerHTML = `São ${hora} horas, ${min} minutos e ${seg} segundos.`
    if (hora >= 0 && hora <= 12) {
        img.src = 'imgs/foto-manha.png'
        document.body.style.background = '#FFBD71'
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'imgs/foto-tarde.png'
        document.body.style.background = '#D9A78B'
    } else {
        img.src = 'imgs/foto-noite.png'
        document.body.style.background = '#2C3E46'
    }
}
