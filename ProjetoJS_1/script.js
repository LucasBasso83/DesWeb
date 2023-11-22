function calcularArea()
{
    let base = Number(document.getElementById('base').value);
    let altura = Number(document.getElementById('altura').value);
    area = (base * altura) / 2;
    console.log(area);
    document.getElementById('resultadoArea').innerText = `A área será: ${area}`;
}
function mediaPonderada()
{
    media = 0;
    let nota1 = Number(document.getElementById('nota1').value);
    let nota2 = Number(document.getElementById('nota2').value);
    media = (nota1 * 0.3) + (nota2 * 0.7);
    console.log(media);
    document.getElementById('resultadoMedia').innerText = `A média ponderada será: ${media}`;
}
function calcularConsumoMedio()
{
    let distancia = parseFloat(document.getElementById('distancia').value);
    let volume = parseFloat(document.getElementById('volume').value);
    if (isNaN(distancia) || isNaN(volume)) {
        alert("Por favor, insira valores numéricos para a distância e o volume.");
        return;
    }
    let consumoMedio = distancia / volume;
    document.getElementById('resultado').innerText = `Consumo médio: ${consumoMedio} km/l`;
}
function gerarNumeroEVerificarParidade() {
    const numero = Math.floor(Math.random() * 100) + 1;
    const paridade = numero % 2 === 0 ? "par" : "ímpar";
    document.getElementById('numeroGerado').innerText = `Número gerado: ${numero}`;
    document.getElementById('resultadoParidade').innerText = `O número é ${paridade}.`;
}