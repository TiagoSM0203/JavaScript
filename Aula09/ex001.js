var idade = 30
if (idade < 16) {
    console.log(`Nao vota`)
} else if (idade < 18 || idade > 67) {
        console.log(`Voto opcional`)
} else {
    console.log(`Voto obrigatorio`)
}