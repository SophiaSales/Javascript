class SmoothScroll{
    constructor(links){ // parametros dentro do construtor
        this.linkElements = document.querySelector(links) //selecionando do html os links no caso o "a" 
        this.addClickEvent(); //executando a funçao no contrutor de smoothscroll
    }
    handleClick(event){  
        event.preventDefault()
        const href = event.currentTarget.getAttribute("href")
        const section = document.querySelector(href)
        console.log(section.offsetTop); 
        window.scrollTo({
            top: section.offsetTop - (window.innerHeight - section.clientHeight) / 2,  // deixando items ao centro 
            behavior: "smooth" //movimento scrou suave com apenas um click
        })
    }
    addClickEvent(){
        this.linkElements.forEach(link => { //para cada link eu adiciono um click
            link.addEventListener("click", this.handleClick) //passando o evento de click pra esta funçao
        });
    }
}
class ActiveSmoothScroll extends SmoothScroll{
    constructor(links, section){
        super(links);
        
        this.sectionElements = document.querySelectorAll(section);
        this.handleScroll = this.handleScroll.bind(this); //retornando uma funçao com o this
        this.handleScroll();
        this.activeNavScroll();
    }
    handleScroll(){
        this.sectionElements.forEach((section, i)=>{
            if (window.pageYOffset > section.offsetTop - window.innerHeight * 0.5) {
                this.linkElements[i].classList.add("active")
            }else{
                this.linkElements[i].classList.remove("active")
            }
        })
    }
    activeNavScroll(){
        window.addEventListener("scroll", this.handleScroll)
    }
}
const scroll = new SmoothScroll("a[href^='#']", "sections") //criando uma nova classe para smoothscroll

