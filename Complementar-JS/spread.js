//Exemplo 1 *******************
const arr =[0,1,2]
const newArr = [...arr,3]//o spread opreator sao os 3 pontos do array

console.log(newArr);

//Exemplo 2 *******************
const vetor =[0,1,2]
const newVetor = [3,...arr]

function soma(a,b,c){ //pode ser usado em uma funçao 
    return a+b+c
}
console.log(soma(1,...arr));