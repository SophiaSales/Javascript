const precos = [
    "credito",
    "R$ 200",
    "R$ 400",
    "contas a pagar",
    "R$ 300",
    "R$ 400",
    "meus dados"
]
const precosFiltro = precos.filter(preco => preco.includes("R$")) //verificando e incluindo o valor de R$ do array retornando uma array nova sem modificar a array original filtrando so os numeros 

const precoNumero = precosFiltro.map(preco => //usando o map retorno uma novo array somente com numeros 
    Number(preco.replace("R$ "," ")) //usando o replace e titaranso o R$ e o espaço do numero 
)

const total = precoNumero.reduce ((acc, item) => acc + item) //fazendo a soma entre os valores do array e retornando o ultimo valor e unico 

console.log(precosFiltro); 
console.log(precoNumero);
console.log(total);