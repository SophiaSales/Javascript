//Exemplo 1 *******************
const func1 = function(param1){
    //ṕadrao de funçao simples
}

const func2 = (param) =>{
    //funçao arrow-functions usando a => recebendo instruçoes dentro dela
}

//Exemplo 2 *******************
const func3 = function(valor){
    return valor * 2
}

const func4 = valor => valor*2 
//simplificando a funçao de cima usando o =>

const vetor = [1,2,3]
vetor.map(valor => valor * 2)

//Exemplo 3 ********************
class Componente extends Component{
    loadData(){ 

    }
    render(){
        return (<button onClick>={()=>{ thisloadData ()}}</button>)
    }
    //usando a => eu referencio ao contexto esterno no caso seria a loadData. E em uma fonction eu referencio ao conteudo dentro dela
}