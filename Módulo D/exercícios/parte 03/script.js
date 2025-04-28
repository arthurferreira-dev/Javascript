function verificador() {
    var date = new Date()
    var ano = date.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || Number(fano.value) > ano) { //Validação
        alert('[ERROR] Verifique se os dados estão devidamente preenchidos [ERROR]')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gen = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            gen = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'imgs/criança-M.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'imgs/adolescente-M.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'imgs/adulto-M.png')
            } else {
                img.setAttribute('src', 'imgs/idoso-M.png')
            }
        } else if (fsex[1].checked) {
            gen = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'imgs/criança-F.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'imgs/adolescente-F.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'imgs/adulto-F.png')
            } else {
                img.setAttribute('src', 'imgs/idoso-F.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gen} com ${idade} anos.`
        res.appendChild(img)
    }
}