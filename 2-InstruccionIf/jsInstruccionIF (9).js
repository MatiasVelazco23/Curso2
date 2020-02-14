function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 

	var numero;
maximo=10;
minimo=1;

numero= Math.floor(Math.random()* ((maximo+1)-minimo)+minimo);
alert(numero);
}//FIN DE LA FUNCIÓN