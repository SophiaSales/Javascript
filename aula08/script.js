function verificar(){
    var data = new Date()
    var ano = data.getFullYear() //pegando o ano do sistema
    var fano = document.getElementById('txtano') //usando seletor de elementos id no JS pegando do html
    var res = document.querySelector('div#res')

    if(fano.value.length == 0 || Number(fano.value) > ano ){ // se o valor de ano for igual a 0 e maior que o ano atual exibe uma mensagem de erro
        window.alert('[ERRO] Verifique os dados e tente novamente')
    }else{
        var fsex = document.getElementsByName('radsex') //usando seletor de elemento name no JS pegando no html
        var idade = ano - Number(fano.value) //calculando a idade com o ano atual e o fano
        var genero = ''   // variavel de indicaçao de genero 
        var img = document.createElement('img') //criando uma tag imagem
        img.setAttribute('id', 'foto') //incluindo os seguintes atributos na tag img

        if (fsex[0].checked) { //se fsex for igual label masculino=[0] e esta checado resulta em Homem   
            genero = 'Homem'
            if (idade >=0 && idade <10) {
                //criança
                img .setAttribute('src','img/menino.jpg') //criando um tag img
            }else if (idade < 21) {
                //jovem
                img .setAttribute('src','img/joveno.jpg')
            }else if (idade < 50) {
                //adulto
                img .setAttribute('src','img/homem.jpg')
            }else{
                //idoso
                img .setAttribute('src','img/velho.jpg')
            }
        }else {
            genero = 'Mulher'  //se nao for muda para fsex label feminino=[1] estando checado resulta em Mulher
            if (idade >=0 && idade <10) {
                //criança
                img .setAttribute('src','img/menina.jpg')
            }else if (idade < 21) {
                //jovem
                img .setAttribute('src','img/jovena.jpg')
            }else if (idade < 50) {
                //adulto
                img .setAttribute('src','img/mulher.jpg')
            }else{
                //idoso
                img .setAttribute('src','img/velha.jpg')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img) // add tag img
    }

}