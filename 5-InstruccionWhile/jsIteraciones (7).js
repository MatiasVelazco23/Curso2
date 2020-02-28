function mostrar()
{
	var contador= 0;   //variable contador
var seguir;            // pregunta al usuario
var acumulador= 0;     //acumulador de numeros
var numero;            // dato a ingresar 
	do{                                                      // do para que se ejecute una vez
		numero=parseInt(prompt("Ingrese un numero"));        // dato a ingresar
		while(isNaN(numero)){                                // validar numero
			numero=parseInt(prompt("Eso no es un numero"));
		}
		acumulador=acumulador+numero;                          // acumulador, dentro del do
				contador ++;                                    // contador dentro del do

	 seguir=	prompt("Quiere seguir ingresando un numero");     // pregunta al usuario 
	}while(seguir=="si");                                      // si es true  var se vuelve a ejecutar el do

promedio = acumulador / contador;                                   // promedio luego de tener todos los numeros al pasar una vez el contador es 1
       
document.getElementById('suma').value=acumulador;                        //mostrar datos
document.getElementById('promedio').value=acumulador/contador;             //mostrar datos

}//FIN DE LA FUNCIÓN