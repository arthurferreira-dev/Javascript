let amigo = {nome: 'José', sexo: 'M', peso: 85.4, 
    engordar(p=0) {
        console.log(`${amigo.nome} Engordou ${peso}Kg`)
        this.peso += p
}}
let peso = 2
amigo.engordar(peso)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)