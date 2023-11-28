
elementoCEP.addEventListenner('click', async function()
{
    var cep = document.getElementById(cep).value 
    if(validaUF.test(cep)){
        var api = `https://viacep.com.br/ws/${cep}/json/`
        let resposta = await fetch(api);
    cidade = await  resposta.json();
    }
})
























//elementoEndereco.addEventListener('click', async function(){
 //   document.getElementById('resultado').innerText = ""
//    var estado = (document.getElementById("estado").value).toUpperCase()
///   var cidade = document.getElementById("cidade").value
//    var rua = document.getElementById("rua").value






//if (estado=='' || cidade =='' || rua=='')
//alert("Preencher os campos UF, cidade e rua!");
//else
//{
//var validaUf = /^[a-zA-Z]{2}$/;
//if(validaUf.test(estado)){
//    var api = `https://viacep.com.br/ws/${estado}/${cidade}/${rua}/json/`
//    let resposta = await fetch(api);
//dados = await  resposta.json();
//if (dados.length == 0 )
//   document.getElementById('resultado').innerText = "Não foi encontrado nenhum endereço";
//else{
 //   dados.forEach(dado => {
 //   document.getElementById('resultado').innerText += dado.bairro+ ' - ' + dado.logradouro+ ' - ' + dado.cep + '\n'
 //       });            
//    }
//}
