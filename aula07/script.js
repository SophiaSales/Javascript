function carregar(){
    var msg = window.document.getElementById('msg') //usando o seletor de elementos pra pegar do html
    var img = window.document.getElementById('imagem')
    var data = new Date()  // pegando hora do sistema 
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas` //chamando msg do html

    if(hora >= 0 && hora < 12) {  //condiçao de horarios do dia
        img.src = './img/manha.jpg'
        document.body.style.background = 'rgb(183, 202, 237)'
    }else if (hora >= 12 && hora <= 18){
        img.src = './img/tarde.jpg'
        document.body.style.background = 'rgb(250, 222, 161)'
    }else{
        img.src = './img/noite.jpg'
        document.body.style.background = 'rgb(2, 113, 197)'
    }

}