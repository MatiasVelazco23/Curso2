
function mostrar()
{
var contador=0;
var acumulador=0;
var numero;
var promedio;



while(contador<5){
	numero=parseInt(prompt("Ingrese un numero"));
	while(isNaN(numero)){
		numero=parseInt(prompt("Eso no es un numero, Ingrese un numero"))
	}
	acumulador=acumulador+numero
	contador++;	
}
            promedio= acumulador/contador                                                                                      


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=promedio;

}
//FIN DE LA FUNCIÓN




{
var num;             // dato a ingresar
var promedio;       // operacion
var contador=0;    // contador 
var acumulador=0; //suma

while(contador>5){
	num=parseInt(prompt("Ingrese un numero"));// ingresar numero
     while(isNaN(numero)){                     
		 num=parseInt(promp("Ingrese un numero valido")) // validar numero
	 }
	 acumulador=acumulador+num; // sumar numero
	 contador++;                // aumentar valor contdor
	}
	promedio=acumulador/contador //calcular promedio

	document.getElementById('suma').value=acumulador; //mostrar en caja de texto
	document.getElementById('promedio').value=promedio; //mostrar en caja de texto
}