function mostrar() {
	var flag = 0;
	var positivo = 0;
	var negativo = 1;
	var numero;

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
	
	
	if (flag == 0) {
		negativo = 0
	}
	document.getElementById('suma').value = positivo;
	document.getElementById('producto').value = negativo;
}
//FIN DE LA FUNCIÓN