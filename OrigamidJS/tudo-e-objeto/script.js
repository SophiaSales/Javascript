const menu ={
    class:".principal",
    ativar(){ //metodo ativar
        const menuElement = document.querySelector(this.class) //this é a variavel menu no caso a classe
        console.log(menuElement);
    }
}
menu.ativar()