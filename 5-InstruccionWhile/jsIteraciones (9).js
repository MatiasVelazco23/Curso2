function mostrar()
{

	var flag=0;
	var numero;
	var maximo;
	var minimo;
	var respuesta='si';
do{
	numero = parseInt(prompt("Ingrese un numero"));
	while (isNaN(numero)) {
		numero = parseInt(prompt("Eso no es un numero"));
	}
	if (flag==0 || numero>maximo) {

		maximo=numero
	}
	else if(flag==0|| numero<minimo) {
	
	minimo=numero
	flag=1
		

	}
	respuesta= prompt("Quiere seguir ingresando un numero");
}while(respuesta=="si")
	
	
	
	document.getElementById("maximo").value=maximo
	document.getElementById("minimo").value=minimo





}//FIN DE LA FUNCIÓN