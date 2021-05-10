//Exemplo 1 *******************
const vetor =[
    {
        id: 1,
        nome: 'Bicicleta',
        categoria: 1
    },
    {
        id: 2,
        nome: 'Toca de natação',
        categoria: 2
    }
]

vetor.map((item)=>{ //primeira forma de utilizar o map é passa pelos itens do vetor
    console.log(item);
    return item
})

//Exemplo 2 *******************
const lista =[
    {
        id: 3,
        nome: 'Cola',
        categoria: 3
    },
    {
        id: 4,
        nome: 'Toca',
        categoria: 4
    }
]
lista.map(item => <p>{item}</p>) //usando map na forma de react

//Exemplo 3 *******************
const tabela =[
    {
        id: 5,
        nome: 'Bolsa',
        categoria: 5
    },
    {
        id: 6,
        nome: 'Livro',
        categoria: 6
    }
]
const tabela2 = tabela.map(item => item.nome)//segunda forma de usar o map é criando uma variavel e colocando os itens dentro dela e chamando determnado item
console.log(tabela2);

//Exemplo 3 *******************
const vetores =[
    {
        id: 7,
        nome: 'Saia',
        categoria: 5
    },
    {
        id: 6,
        nome: 'Sapato',
        categoria: 6
    }
]
const vetores2 = vetores.map(item =>{ //terceira forma de usar o map é mudando um item pra posiçao de outro item 
    item.categoria = categorias[item.categoria]
    return item
})
console.log(vetor2);