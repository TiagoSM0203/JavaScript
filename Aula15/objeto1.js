let amigo = {nome: 'jose',
    sexo: 'm',
    peso: 80.3,
    engordar(p=0) {
        console.log('engordor')
        this.peso += p
    }
}

amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}kg`)