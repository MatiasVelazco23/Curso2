function mostrar()
{

var sexo = prompt("ingrese f ó m .");

while (sexo!="m" && sexo!="f"){
sexo= prompt("Ingrese un valor válido");
}
document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN