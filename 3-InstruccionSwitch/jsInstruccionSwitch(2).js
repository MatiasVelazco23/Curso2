function mostrar()
{
//tomo la edad  
var mes = document.getElementById("mes").value;

switch(mes){
    case "Junio":
    case "Julio":
    case "Agosto":
    case "Septiembre":
alert("Abrigate que hace frio");
break;
     case "Enero":
     case "Febrero":
     case "Marzo":
     case "Abril":
     case "Mayo":
alert("Falta para el invierno.");
break;
default:

alert("Ya pasamos el frio, ahora el calor.");
break;
    
}


}//FIN DE LA FUNCIÓN