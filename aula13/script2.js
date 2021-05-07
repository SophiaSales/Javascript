let valores = [8, 1, 7, 4, 2, 9]

console.log(valores);

for (let pos = 0; pos < valores.length; pos++) {  //estrutura de repetiçao para mostrar o arrey
    console.log(`A posiçao ${pos} tem o ${valores[pos]}`);
    
}

for (let pos in valores){//para cada posiçao "pos" na variavel composta valores, le valores
    console.log(`A posiçao ${pos} tem o ${valores[pos]}`);
}