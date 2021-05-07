function contar(){
    let ini = document.getElementById('txti')  // let a a determinaçao de uma variaavel que nao pode sair do escopo
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')  //usando o seletor de instruçoes chamando as tgs dentro do JS 
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ){      //condiçao de erro se todas a variaveis tiver o valor 0
        res.innerHTML = 'Imposivel contar'
        //window.alert('[ERRO] Falta dados')
    }else{
        res.innerHTML = 'Contando: <br>' //chamando a variavel res
        let i = Number(ini.value)  //transfomando variaveis para um valor numerico 
        let f = Number(fim.value)
        let p = Number(passo.value)

        if(p <= 0){    // se passo for igual menor que 0 se considera o passo 1
            window.alert('Passo invalido! Considerando passo 1')
            p =1 
        }

        if (i < f){   //se inicio for menor que fim a contagem é crescente se nao é decrecente 
            for(let c = i; c <= f; c+=p){ //condiçao de contador, sendo igual ao inicio menor igual ao fim e igual mais o passo
                res.innerHTML += `${c}  \u{2796}`  //res concatena com o c o contador 
            }
        }else{
            for(let c = i; c >= f; c-= p){  //contador igual ao inicio, sendo maior igual ao fim e menor igual a passo
                res.innerHTML += `${c} \u{2796}`
            }
        }
    }
    }