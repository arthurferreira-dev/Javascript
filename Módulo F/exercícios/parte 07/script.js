function contador() {
    let inicio = document.getElementById('txtini')
    let fim = document.getElementById('txtfim')
    let passo = document.getElementById('txtpas')
    let res = document.querySelector('div#res')

    if (inicio.value.length == 0 ||  fim.value.length == 0 || passo.value.length == 0) {
        //alert('[ERROR] Faltam Dados [ERROR]')
        res.innerHTML = `[ERROR] Faltam Dados [ERROR]`
    } else {
        res.innerHTML = `Contando... <br>`
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p <= 0) {
            alert('Passo inválido, passo irá valer 1')
            p = 1
        }

        if (i < f) {
            // Crescente
            for (let c = i ; c <= f ; c += p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }   
        } else {
            // Descrecente
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}