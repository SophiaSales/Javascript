//Exemplo 1 ******************
const strMultilinha = `linha1
linha do meio
linha2`
console.log(strMultilinha);

//Exemplo 2 ******************
const a=10
const str = `Ola ${a+1} !` //string interpolada siguinifica mistura de expraçao com string

console.log(str);

//Exemplo 3 ******************
function tag(strings, ...value) {
    console.log(strings, value);
    console.log(strings.raw[0]); //mostrando raw 
    return 'opa'
}
const str = tag`Ola
${10} mundo ${20}!`
console.log(str)