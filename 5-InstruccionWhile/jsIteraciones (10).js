function mostrar()
{

	var contadorPositivos=0
	var contadorNegativos=0
	var positivos=0
	var negativos=1
	var numero;
	var seguir;


	do{
		numero = parseInt(prompt("Ingrese un numero"));
		while (isNaN(numero)) {
			numero = parseInt(prompt("Eso no es un numero,Ingrese un numero"));
		}
    if(numero>=0){
		sumapositivos=positivos+numero;
		contadorPositivos++
	}
	else{
		sumanegativos=negativos+(numero)
		contadorNegativos++
 
	
	}
	seguir = prompt("Quiere seguir ingresando un numero");
} while (seguir == "si");
	
	
if (contadorNegativos==0) {
	negativo = 0
}
else if (contadorPositivos==0){
	positivos= 0
}
alert(sumapositivos);
alert("la suma de negativos es"+sumanegativos);

alert(contadorpositivos);
alert(contadornegativos);

}

//FIN DE LA FUNCIÓN