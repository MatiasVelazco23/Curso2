function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numero;
	maximo=10;
	minimo=1;
	
	numero= Math.floor(Math.random()* ((maximo+1)-minimo)+minimo);

if(numero==10 || numero==9)
	{
		alert("Excelente")
	}
	else if (numero<4){
		alert("vamos, la próxima se puede")
	}
	else
	{
	alert("Aprobó");
}

}//FIN DE LA FUNCIÓN