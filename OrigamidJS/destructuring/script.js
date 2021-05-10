//Exemplos de destruturaçao
function handleMouseMove({clientX, clientY}){ //desestruturando direto na funçao sem adiçao de variaveis
    console.log(clientX, clientY);
}

document.documentElement.addEventListener("mausemove", handleMouseMove)

//Exemplo 2 *********************
const fruta = ["Pera","Uva"]
const [fruta1,fruta2] = frutas //usando a desestruturaçao com arrays

console.log(furta1, fruta2);
console.log(frutas);

//Exemplo 3 *********************
const useState = [ //desetruturando com react 
    "blue",
    function (color){
        useState[0] = color
    }
]
const [color, setColor] =useState //colocando o valor blue e a funçao em setColor 