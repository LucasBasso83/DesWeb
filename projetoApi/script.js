elementoCep = document.getElementById('pesquisaCep')
elementoEndereco = document.getElementById('pesquisaEndereco')
let key = "2f8e3a421358279e734213b8d5471c4b"
let flag = "https://flagsapi.com"
let imagemCidade = "https://source.unsplash.com/1600x900/?chess=pieces"


elementoPesquisaClima = document.getElementById("pesquisaClima")
elementoPesquisaClima.addEventListener('click', async function()

{
    cidade = document.getElementById("cidade").value;
    const apiClimaURL = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&appid=${key}&lang=pt_br`;

    let respostaClima = await fetch(apiClimaURL)
    let objdados = await respostaClima.json()
    let temperatura = objdados.main.temp; 
    let descricao = objdados.weather[0].description
    document.getElementById('resultado').innerText = `Hoje esta ${temperatura} e ${descricao}`
    
    
})
elementoCep.addEventListener('click', async function()
{
    document.getElementById('resultado').innerText = ""
    var valor= document.getElementById("cep").value
        if (valor=='')
            alert("informe o CEP");
        else
        {
            var cep = valor.replace(/\D/g, '');
            var validacep = /^[0-9]{8}$/;
       
            if(validacep.test(cep)) {
            var api= 'https://viacep.com.br/ws/'+cep+'/json/';
            let resposta = await fetch(api);
            dados = await  resposta.json();
            console.log(dados);
            if (dados.erro)
               document.getElementById('resultado').innerText = "CEP Não Existe";
            else
               document.getElementById('resultado').innerText = dados.logradouro + " "+ dados.bairro + " "+ dados.localidade + " "+ dados.uf
               document.getElementById('cidade').value = dados.localidade
    
    
     }
          else
            alert("cep inválido");
    }
    })

    elementoEndereco.addEventListener('click', async function(){
        document.getElementById('resultado').innerText = ""
        var estado = (document.getElementById("estado").value).toUpperCase()
        var cidade = document.getElementById("cidade").value
        var rua = document.getElementById("rua").value

        if (estado=='' || cidade =='' || rua=='')
            alert("Preencher os campos UF, cidade e rua!");
        else
        {
            var validaUf = /^[a-zA-Z]{2}$/;
            if(validaUf.test(estado)){
                var api = `https://viacep.com.br/ws/${estado}/${cidade}/${rua}/json/`
                let resposta = await fetch(api);
            dados = await  resposta.json();
            if (dados.length == 0 )
               document.getElementById('resultado').innerText = "Não foi encontrado nenhum endereço";
            else{
                dados.forEach(dado => {
                document.getElementById('resultado').innerText += dado.bairro+ ' - ' + dado.logradouro+ ' - ' + dado.cep + '\n'
                    });            
                }
            }
            else
            alert("UF inválido");
        }
    })