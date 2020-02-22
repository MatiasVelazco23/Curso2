function mostrar()
{

	var contador=0;
	var negativos=1
	var positivos=0
	var numeros;
	//declarar contadores y variables 
	
	var seguir="si";


	do {
		numero = parseInt(prompt("Ingrese un numero"));
		while (isNaN(numero)) {
			numero = parseInt(prompt("Eso no es un numero"));
		}
		if (numero >= 0) {

			positivo = positivo + numero;
		}
		else {
			negativo = negativo * numero
			flag = 1
	
		}
		seguir = prompt("Quiere seguir ingresando un numero");
	} while (seguir == "si");


	document.getElementById('suma').value = positivo;
	document.getElementById('producto').value = negativo;
	{
		
	
	}




}//FIN DE LA FUNCIÓN