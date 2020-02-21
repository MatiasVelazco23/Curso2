function mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 10.");

while (numero<0 || numero>9 || isNaN(numero)){//while (!(numero>=0 && numero<=9)){ (numero<0 || numero>0)
numero= prompt("Ingrese un numero valido");
}
document.getElementById("Numero").value=numero
}//FIN DE LA FUNCIÓN