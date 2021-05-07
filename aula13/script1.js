let num = [5, 8, 2, 9, 3] //variavel composta arrey
num.push(1)  //add um elemento no arrey
num.sort()   //colocando arrey em ordem 
console.log(num);
console.log(`O vetor tem ${num.length} posições`); //length mostra o tamanho de um arrey
console.log(`O primeiro  valor do vetor é ${num[0]}`); //mostra o que esta na posição  0 do arrey 

let pos = num.indexOf(5)   //index procura o valor tal em um arrey valor que ele nao encontra resultado da -1 

if (pos == -1) { //se o valor for igual a -1 mostra a mensagem 
console.log(`O valor não foi encontrado!`);
}else{console.log(`O valor esta na posiçao ${pos}`);} //se nao mostra a posiçao do valor no arrey 
