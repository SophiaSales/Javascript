let num = document.querySelector('input#fnum')   //pegando tgs do html e fazendo variaveis no JS
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = [] //variavel de verificaçao 

function isNumero(n){
    if(Number(n) >=1 && Number(n) <=100){   //a funçao so podera receber numeros entre 1 a 100
        return true
    }else{
        return false
    }
}

function inLista(n, l){    //funçao de verificar um numero na lista se ele nao estiver é igual a -1 'true' se ele estiver igual a false 
    if (l.indexOf(Number(n)) != -1){
        return true
    }else {
        return false
    }
}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){ //só vai add um numero se nao for um numero ou se o numero estiver na lista valores 
        valores.push(Number(num.value)) //add um numero e transformando a variavel num em numerica
        let item = document.createElement('option') //definnido uma variavel item criando uma tag html
        item.text = `Valor ${num.value} foi adicionado` //chamando a variavel item coom a tag texto recebendo o numero adicionado e mostrando ele no documento html
        lista.appendChild(item)  //add a variavel com a tag 
        res.innerHTML = '' //quando for add um numero ele limpa 

    }else{
        window.alert('Valor invalido, ou ja encontrado na lista ')
    }
    num.value = "" //depois de add um numero a caixa de texto apaga
    num.focus() //e permanecer o curso na cixa de texto depois de add um numero
}

function finalizar(){
    if(valores.length == 0) {
        window.alert('Adicione valores antes de finalizar')
    }else{
        let total = valores.length  //saber a quantidade de elementos add no arrey valores
        let maior = valores[0]  //maior numero na primeira posiçao 
        let menor = valores[0]  //menor numero na primeira posiçao
        let soma = 0
        let media =0

        for (let pos in valores) {  //para cada pos em valores
            soma += valores[pos]   //soma de todos os valores
            if (valores[pos] > maior) //se o maior valor na posiçao pos for maior 
                maior = valores[pos]  //pos passa a ser o maior valor 
            if(valores[pos] < menor)  //se o menor valor na posiçao pos for menor 
                menor = valores[pos]  //pos passa a ser o menor valor 
        }
        media = soma / total
        res.innerHTML = '' //zerando a variavel res
        res.innerHTML += `<p>Ao todo, temos ${total} numeros cadastrados</p>` //add um p em res mostrando o total de numeros cadadastrados na funçao finalizar
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>` //add dois paragrafos na funçao indicando o maior e menor valor no arrey
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>Somando todos os valores temos ${soma}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>A media dos valores digitados é ${media}</p>`
    }
}