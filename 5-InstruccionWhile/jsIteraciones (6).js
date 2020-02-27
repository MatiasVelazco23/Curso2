
function mostrar()
{
var contador=0;
var acumulador=0;
var numero;
var promedio;
var acumular;


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