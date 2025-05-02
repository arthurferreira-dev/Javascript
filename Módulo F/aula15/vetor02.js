let vetor = [53, 22, 14, 88, 61]

console.log('as posições do meu vetor em ordem:')
vetor.sort()
for(let pos in vetor) {
    console.log(`A posição ${pos} tem o valor ${vetor[pos]}`)
}