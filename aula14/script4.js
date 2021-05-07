function fatorial(n) { 
    let fat = 1        //uma funçao com um parametro recebe uma variavel valendo 1
    for (let c = n; c > 1; c--){ //que recebe um contador igual ao parametro, sendo maior que 1 e deminuindo valor 
        fat *= c  //é chamada a variavel fat e multipilcada com o contador  
    }
    return fat //retornando fat seu valor seria 
}
console.log(fatorial(5)); //chamando a funçao e atribuindo um valor ao parametro 