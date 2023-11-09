
function calcularPacote()
{
    let pedido = 0;
    let adicionais = 0;
    let tipoPedido = document.querySelector("select[name='combos']").value;
    console.log(tipoPedido);

    let qtdEntrega = document.querySelectorAll("input[name='entrega']").length;
    let tipoEntrega = document.querySelectorAll("input[name='entrega']");
    console.log(tipoEntrega);
    for(var i=0; i<qtdEntrega; i++){
        if (tipoEntrega[i].checked == true)
        {
            valorEntrega = valorEntrega + parseFloat(tipoEntrega[i].value);   
       }
    }
    console.log(qtdEntrega); 

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
    
}
