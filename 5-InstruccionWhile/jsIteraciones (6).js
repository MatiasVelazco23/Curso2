function mostrar()
{

	var contador=0;
	var acumulador=0;
	var promedio;
	var numero;


while(contador<4){
	numero=parseInt(prompt("Ingrese un numero"));
	while(isNaN(numero)){
		numero=parseInt(prompt("Eso no es un numero, Ingrese un numero"))
	}
	acumulador=acumulador+numero
	contador++;	
}
                                                                                                  


document.getElementById('suma').value=acumular;
document.getElementById('promedio').value=promedio;

}//FIN DE LA FUNCIÓN