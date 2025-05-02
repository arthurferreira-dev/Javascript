let vetor = [53, 22, 14, 88, 61]

console.log('Esse é são as posições e valores das chaves na ordem padrão:')
for (let pos = 0; pos < vetor.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${vetor[pos]}`)
}

vetor.sort()
console.log('Esse é são as posições e valores das chaves na ordem crescente:')
for (let pos = 0; pos < vetor.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${vetor[pos]}`)
}