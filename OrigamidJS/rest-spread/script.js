//Exemplo rest ********
function showList (empresa, ...clientes){
    console.log(empresa);
    console.log(clientes);
}
showList("Origamid", "Joao", "Maria" , 10) //rest é um array onde se pode adicionar varios item desta maneira

//Exemplo spread *******
const numeros =[1,2,3,4,5,5,]
console.log(Math.max(...numeros)); //spread sao os 3 pontinhos representando o array da constante acima

//Exemplo 1 *************
const items = document.querySelectorAll("li");
[...items].map(item=>{
    console.log(item)
})
console.log(items)

//Exemplo 2 **************
const carro = {cor:"Azul", portas:4, ano:2020}
const cloneCarro = {...carro, trubo: true}; //clone de items da lista, podendo tambm adcionar outros items

//Exemplo 3 clone ********
class Transporte{  //criando uma variaverl construtor e pasando seus metodos para variavel carro
    contrutor(){
        this.terrestre = true;
    }
    andar(){
        console.log("andar");
    }
}
class Carro extends Transporte{
    contrutor(cor, portas){ //devinido um array pra carro usando contrutor 
        super();
        this.cor = cor
        this.portas = portas
    }
}
const carro = new Carro("vermelho", 4) //criando uma variavel pra clonar o carro 
const cloneCarro = {...carro} //usando o spread a variavel clone nao é perfeita pq ela nao pega as configuraçoes da variavel transporte

console.log(carro);
console.log(cloneCarro);