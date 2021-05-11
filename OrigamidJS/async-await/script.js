async function fetchProdutos(url){
    const response = await fetch(url) //ao contrario de then o await espera a promesa ser resolvida e  depois ele atribuir a response
    const jsonBody = await response.json()  //executando uma funçao de cada vez
    return jsonBody
}
const requisicao = fetchProdutos(
    "https://ranekapi.origamid.dev/wp-json/api/produto"
);
requisicao.then(response =>{ //requisiçao espera o fatchProdutos ser executado depois ele retorna o arquivo json
    console.log(requisicao);
})
