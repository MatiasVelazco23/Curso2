function mostrar()
{

	var contador=0;
	var acumulador=0;
	
	var respuesta='si';
	numero=parseInt(prompt("Ingrese un numero"));
	while(contador==respuesta);
	{
		numero=parseInt(prompt("Queres seguir ingresando numeros"));
		contador= contador+1;
	}

    
document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN