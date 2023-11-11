
function calcularPacote()
{
    let pedido = 0;
    let adicionais = 0;
    let valorEntrega = 0;
    let valorTotalPedido = 0;

    let tipoPedido = Number(document.querySelector("select[name='combos']").value);
    console.log(tipoPedido);

    let qtdEntrega = document.querySelectorAll("input[name='entrega']").length;
    let tipoEntrega = document.querySelectorAll("input[name='entrega']");
    for(var i=0; i<qtdEntrega; i++){
        if (tipoEntrega[i].checked == true)
        {
            valorEntrega = valorEntrega + parseFloat(tipoEntrega[i].value);   
       }
    }
    console.log(valorEntrega); 

    let queijo = document.querySelector("input[name='queijo']");  
    let carne = document.querySelector("input[name='carne']");    
    let picles = document.querySelector("input[name='picles']");
    if ( queijo.checked == true )
        {
           adicionais = Number(queijo.value) + adicionais;
        };
    if ( carne.checked == true )
        {
           adicionais = Number(carne.value) + adicionais;
        };
    if ( picles.checked == true )
        {
           adicionais = Number(picles.value) + adicionais;
        };
    console.log(adicionais);

    valorTotalPedido = tipoPedido + valorEntrega + adicionais

    document.getElementById("valorTotal").value = valorTotalPedido
    
    document.getElementById("descricaoPedido").innerText = `O valor do lanche é: ${tipoPedido},  da entrega é: ${valorEntrega} e dos adicionais é: ${adicionais}`
      
    
    
}
