let num = document.getElementById('fnum')
let tab = document.getElementById('flista')
let res = document.getElementById('res')
let vetor = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function Add() {
    if (isNumero(num.value) && !inLista(num.value, vetor)) {
        vetor.push(Number(num.value))

        let n = Number(num.value)
        let item = document.createElement('option')
        item.text = `Valor ${n} adicionado`
        item.value = `val${n}`
        tab.appendChild(item)
        res.innerHTML = ''
    } else {
        alert('Valor inválido ou já encontrada')
    }
    num.value = '' // Zera o input number
    num.focus() // Deixa no input number
}

function Final() {
    if (vetor.length == 0) {
        alert('Adicione valores antes de valores!')
    } else {
        let total = vetor.length
        let big = vetor[0]
        let small = vetor[0]
        let soma = 0
        let media = 0

        for(let pos in vetor) { // vai analisar um por um
            soma += vetor[pos]
            if (vetor[pos] > big) {
                big = vetor[pos]
            }
            if (vetor[pos] < small) {
                small = vetor[pos]
            }
        }

        media = soma / total

        res.innerHTML = ''

        res.innerHTML += '<h2>Total:</h2>' //título bonitin ^w^
        res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`

        res.innerHTML += '<h2>Maior Número:</h2>'
        res.innerHTML += `<p>O maior valor informado foi ${big}.</p>`
    
        res.innerHTML += '<h2>Menor Número:</h2>'
        res.innerHTML += `<p>O menor valor informado foi ${small}.</p>`

        res.innerHTML += '<h2>Soma:</h2>'
        res.innerHTML += `<p>A soma de todos os valores dá ${soma}.</p>`

        res.innerHTML += '<h2>Média:</h2>'
        res.innerHTML += `<p>A média dos valores é ${media}.</p>`
    }
}