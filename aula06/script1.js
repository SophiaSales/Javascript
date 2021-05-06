var idade = 16

console.log(`Voce tem ${idade} anos`);

if (idade < 16) {
    console.log('Não vota ');
}else if (idade < 18 || idade > 65) {
    console.log('Voto opcional');
    //menor que 18 ano e maior que 65 anos voto seria opcional
}else {
    console.log('Voto obrigatorio');
}