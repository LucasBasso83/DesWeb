let valorPacote = 0;
let totalAdicionais = 0;

function calcularPacote()
{
    let qtdPacotes = document.querySelectorAll("input[name='pacotes']").length;
    console.log(qtdPacotes); /*qtde de pacotes */
 
    let pacotes = document.querySelectorAll("input[name='pacotes']");  /*selecionando todos os pacotes */
    console.log(pacotes);
    
    // em uma linha somente o que esta em baixo let valor = document.querySelectorAll("input[name='pacotes']: checked"): value

    //                    i < pacotes.length.
    for (var i=0; i< qtdPacotes; i++)
    {
        if ( pacotes[i].checked == true )
        {
            console.log(pacotes[i].value)
            valorPacote = Number(pacotes[i].value);
            break
        };
    }
}

function calcularAdicionais()
{
    // versão 1:
    totalAdicionais = 0;
    let adicionais = document.querySelectorAll("input[name='adicionais']")
   console.log(adicionais);
    for (let i=0; i< adicionais.length; i++)
    {
        if (adicionais[i].checked == true)
        {
             totalAdicionais = totalAdicionais + parseFloat(adicionais[i].value);   
        }
    }
    
}


    function calcularTotalViagem()
    {
        calcularPacote();
        calcularAdicionais();
        let totalFinal = totalAdicionais + valorPacote;
        document.getElementById("totalFinal").textContent = totalFinal;
    }



