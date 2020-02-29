/*Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
    var nombre;
    nombre=document.getElementById("elNombre").value; //tomar una id del html
    alert(nombre);                                     //mostrar dato sacado de la id
}


