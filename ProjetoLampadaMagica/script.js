let lampada = document.getElementById("lampada");
function ligar()
{
lampada.src = "luzLigada.gif"

}
function desligar()
{
lampada.src = "luzDesligada.gif"

}
function Aparecer()
{
lampada.hidden = false;

}
function Sumir()
{
lampada.hidden = true;

}
function alternar()
{
    if(lampada.getAttribute("src") == "luzLigada.gif")
        lampada.src = "luzDesligada.gif"
    else if(lampada.getAttribute("src") == "luzDesligada.gif")
        lampada.src = "luzLigada.gif"
    
}
function piscar()
{
    alternar()
} setInterval(piscar, 100);
