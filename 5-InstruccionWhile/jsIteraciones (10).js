function mostrar() {
	var contneg=0;
	var contpos=0;
	var flag = 0;
	var ceroscont;
	var positivos = 0;
	var negativos = 0;
	var seguir = "s";
	var numero;
	var pares=0;
	var contpares=0;

	do {
		numero = parseInt(prompt("Ingrese un Numero"));

		while (isNaN(numero)) {

			numero = parseInt(prompt("Eso no es un Numero"));
		}
		
		


		if (flag == 0 || numero == 0)
		{
			ceroscont++;
		}

		if (flag == 0 || numero < 0) 
		{
			negativos = numero + negativos;
			contneg++;

		}

		else if (flag == 0 || numero > 0) 
		{
			positivos = numero + positivos;
			contpos++;
			flag = 1;
		}


		seguir = prompt("quiere ingresar otro numero?");



	} while (seguir == "s");


	document.write("La suma de los negativos es:" + negativos + "</br>");
	document.write("La Suma de los positivos es:" + positivos + "</br>");
	document.write("La Cantidad de positivos es:" + contpos + "</br>");
	document.write("La Cantidad de negativos es:" + contneg + "</br>");
	document.write("La Cantidad de ceros es:" + ceroscont + "</br>");
	document.write("La Cantidad de números pares:" + contpares + "</br>");
	document.write("Promedio de positivos:" + (positivos / contpos) + "</br>");
	document.write("Promedios de negativos:" + (negativos / contneg) + "</br>");
	document.write("Diferencia entre positivos y negativos es:" + (positivos - negativos) + "</br>");


}//FIN DE LA FUNCIÓN



function mostrar() {

	var acumuladorNegativos = 0;
	var acumuladorPositivos = 0;
	var contadorPositivos = 0;
	var contadorNegativos = 0;
	var contadorCeros = 0;
	var contadorPares = 0;
	var promedioPos = 0;
	var promedioNeg = 0;
	var diferencia;
	var numero;
	var seguir;

	do {
		numero = parseInt(prompt("Ingrese un numero: "));
		while (isNaN(numero)) {
			numero = parseInt(prompt("Eso no es un numero. Ingrese un numero: "));
		}
		if (numero > 0) {
			//positivo
			acumuladorPositivos = acumuladorPositivos + numero;
			contadorPositivos++;

		}
		else if (numero < 0) {
			// negativo
			acumuladorNegativos = acumuladorNegativos + numero;
			contadorNegativos++;

		}
		else {
			// cero
			contadorCeros++;
		}
		//-----------------------
		if (numero % 2 == 0) {
			contadorPares++;
		}


		seguir = prompt("Quiere ingresar otro numero?");
	} while (seguir == 's');

	if (contadorPositivos != 0) {
		promedioPos = acumuladorPositivos / contadorPositivos;
	}
	if (contadorNegativos != 0) {
		promedioNeg = acumuladorNegativos / contadorNegativos;
	}
	diferencia = contadorPositivos - contadorNegativos;

	document.write("1 - Suma de los negativos: " + acumuladorNegativos + "</br>");
	document.write("2 - Suma de los positivos: " + acumuladorPositivos + "</br>");
	document.write("3 - Cantidad de positivos: " + contadorPositivos + "</br>");
	document.write("4 - Cantidad de negativos: " + contadorNegativos + "</br>");
	document.write("5 - Cantidad de ceros: " + contadorCeros + "</br>");
	document.write("6 - Cantidad de números pares: " + contadorPares + "</br>");
	document.write("7 - Promedio de positivos: " + promedioPos + "</br>");
	document.write("8 - Promedios de negativos: " + promedioNeg + "</br>");
	document.write("9 - Diferencia entre positivos y negativos: " + diferencia + "</br>");


}//FIN DE LA FUNCIÓN