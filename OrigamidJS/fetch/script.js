fetch("https://ranekapi.origamid.dev/wp-json/api/produto")//lista de produtos, um codigo quw esta vindo 

    .then(response => response.json()) //then retora response antes mesmo da promeça ser concluida
    .then(jsonBody =>{
        document.querySelector('#app').innerHTML = jsonBody[0].nome //seleciona o app do html retorna um elemento nome da lista em json
        console.log(jsonBody); //retorna uma lista em json
    })

const data = { // add as informaçoes do usuario na api
    id: "andrerafa",
    nome: "Andre",
    email: "andrerafa@origamid.com",
    senha: "123456",
    cep: "123456",
    rua: "rosa",
    numero: "230",
    bairro: "Botafogo",
    cidade: "rio de janeiro",
    estado: "RJ"

}    

fetch("https://ranekapi.origamid.dev/wp-json/api/produto", {
    method: "POST",  //add um novo usuario na api 
    headers: {
        "Content-Type": "aplication/json"
    },
    body: JSON.stringify(data)

})