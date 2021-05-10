//Exemplos de usar o arrow function
const upperName = nome => {  
    return nome.toUpperCase();
}
const upperName = nome => nome.toUpperCase();
const countLetters = word => word.length

console.log(upperName("Andre"));
console.log(countLetters("Paula"));

//Exemplo 2 ******************
class Menu {
    constructor(menu){
        this.menuElement = document.querySelector(menu)
    }
    addActiveEvent(){ //add um evento em menu 
        this.menuElement.addEventListener("click", event =>{ //usando o arrow-functio é possivel chamar a funçao addActiveEvent na funçao menu
            event.target.classList.add("active");
        });
    }
}
const menu = new Menu(".principal");
menu.addActiveEvent();

console.log(menu);