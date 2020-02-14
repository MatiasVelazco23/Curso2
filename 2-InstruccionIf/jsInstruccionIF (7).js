function mostrar()
{
//tomo la edad  
var edad;
edad=document.getElementById("edad").value;
estadoCivil=document.getElementById("estadoCivil").value;

if(edad<18 && estadoCivil !="Soltero"){

alert("Es muy pequeño para NO ser soltero.");


}
}