function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //crianca
                img.setAttribute('src', 'img/crianca-m.png')
            } else if (idade < 21) {
                //jevem
                img.setAttribute('src', 'img/jovem-m.png')
            } else if (idade < 51) {
                //adulto
                img.setAttribute('src', 'img/homem-m.png')
            } else {
                //idoso
                img.setAttribute('src', 'img/idoso-m.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //crianca
                img.setAttribute('src', 'img/crianca-f.png')
            } else if (idade < 21) {
                //jevem
                img.setAttribute('src', 'img/jovem-f.png')
            } else if (idade < 51) {
                //adulto
                img.setAttribute('src', 'img/mulher-f.png')
            } else {
                //idoso
                img.setAttribute('src', 'img/idosa-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos!`
        res.appendChild(img)

    }
}