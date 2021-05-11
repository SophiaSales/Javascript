import numeroAleatorio from "./numeroAleatorio"

function area(raio) {
    return Math.PI * raio * raio
}
function circunferencia(raio){
    return 2 * raio * Math.PI
}
function numAleatorio() {
    return numeroAleatorio();
}
const Circulo ={
    area,
    circunferencia,
    numAleatorio 
}
export default Circulo;