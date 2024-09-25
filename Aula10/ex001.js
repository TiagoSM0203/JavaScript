var agora = new Date() //para pegar a hora exata
var hora = agora.getHours() //para pegar a hora exata
console.log(`Agora sao ${hora} horas`)
if (hora < 12) {
    console.log(`Bom dia!`)
} else if (hora <= 18) {
    console.log(`Boa Tarde!`)
} else {
    console.log(`Boa Noite!`)
}