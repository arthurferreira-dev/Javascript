let vetor = [53, 22, 14, 88, 61, 77, 23]

let pos = vetor.indexOf(vetor[5])
console.log(`O valor ${vetor[5]} está na posição ${pos}`)

let pos2 = vetor.indexOf(4)
console.log(`O valor ${vetor.length} está na posição ${pos2}`)

if (pos == -1 || pos2 == -1) {
    console.log('Valor não encontrado.')
} else {
    console.log(`O valor está na posição ${pos}`)
    console.log(`O valor está na posição ${pos2}`)
}