function mostrar() {
	var flag = 0;   /// variable en 0
	var positivo = 0;  //variable en 0
	var negativo = 1;  //variable en 1 PARA QUE AL MULTIPLICAR NO SE CONVIERTA EN 0
	var numero;

	do {
		numero = parseInt(prompt("Ingrese un numero"));    //ejemplo 5
		while (isNaN(numero)) {
			numero = parseInt(prompt("Eso no es un numero"));/// validacion
		}
		if (numero >= 0) {                                     // si numero es menor o igual a 0

			positivo = positivo + numero;                      // 0=0+5
		}
		else {
			negativo = negativo * numero                       // 1=1*5
			flag = 1                                             // EL VALOR DE FLAG CAMBIA A 1
 
		}
		seguir = prompt("Quiere seguir ingresando un numero");   // Si pongo si se vuelve a ejecutar el do por el while
	
	} while (seguir == "si");
	
	
	if (flag == 0) {                                       // si al ingresar datos no ingreso negativos va a saltar el else
		negativo = 0                                      // entonces el negativo va a ser 0 porque no ingrese nada
	}
	document.getElementById('suma').value = positivo;
	document.getElementById('producto').value = negativo;

}
//FIN DE LA FUNCIÓN