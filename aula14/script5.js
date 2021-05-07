function fatorial(n){ //funçao com parametro e uma variavel fatorial valendo 1
    let fat = 1 
    for (let c = n; c > 1; c--){ //contador valendo o parametro, maior que 1, e se decrementando 
        fat *= c //variavel de fatoraçao x o contador
    }
    return fat // chama variavel 
}
console.log(fatorial(5)); //atribuei um valor pra o parametro da funçao 