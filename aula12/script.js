function tabuada(){
    let num = document.getElementById('txtn') // definindi variaveis selecionando elementos do html
    let tab = document.getElementById('seltab')

    if(num.value.length == 0){  //se numero for igual a 0 apresenta a mensagem se nao gera uma tabuada
        window.alert('Por favor, digite um numero!')
    }else{
        let n = Number(num.value) //convertendo varavel num pra numerica
        let c = 1 //definindo variavel de contador 
        
        tab.innerHTML = '' //tabuada sempre iniciando com valor nulo
        while(c <= 10){
            let item = document.createElement('option') // criando tag option com um valor item 
            item.text = `${n} x ${c} = ${n*c}` //fazendo a multiplicaçao com o numero e o contador 
            item.value = `tab${c}`   //cada linha possue um valor pra saber o item que foi selecionado 
            tab.appendChild(item)   //chama a variavel item criada
            c++ //contagem
        }
    }
}