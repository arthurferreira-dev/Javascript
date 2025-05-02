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
        
    } else {
        alert('Valor inválido ou já encontrada')
    }
}