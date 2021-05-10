const carrinho = [
    {id:1, preco:2, qtd:2, estoque:10},
    {id:2, preco:3, qtd:1, estoque:0}
]

const subtotal = item => item.preco * item.qtd
const filtroEmEstoque = item => item.estoque >= item.qtd
const soma = (soma, subtotal) => subtotal + soma

const total = carrinho 
.filter(filtroEmEstoque)  //usando filter pra fitrar o item que nao tem no estoque ou a quantidade necesaria pra uma conpra mostrando só os itens que tem a quantidade certa
.map(subtotal) //pasando um novo vetor só com os itens validos, fazendo um subtotal mutiplicando preço com a quantidade
.reduce(soma, 0) //que vai passar depois para o reduce somando os valores 

console.log(total);

