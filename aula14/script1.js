function parimpar(n) { //funçao de par e impar recebe um parametro n numerico
    if(n%2 ==0){   // se o resta da divisao desse numero for igual a 0 ele é par
        return "Par"
    }else{   //se não ele é impar
        return "Impar"
    }
}
console.log(parimpar(9)); //chama o parametro e da um valor para ele, a chamada pode ser usando uma variavel com "let res = parimpar(9)" 
