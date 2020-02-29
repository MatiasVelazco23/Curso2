/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var nombre;
prompt("Ingrese un nombre");                                //usar prompt para sacar dato
document.getElementById("elNombre").value=nombre;           // mostrar dato en esa casilla 
}

