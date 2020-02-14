function mostrar()
{
//tomo la edad  

var edad;
edad=document.getElementById("edad").value;

if(edad >18){
    
    alert("Es adulto");
}
else if (edad>=13 && edad<=17)
{
    alert("es adolescente");

}
        
else
        {
          alert("es menor a 13");
        }
    




}//FIN DE LA FUNCIÓN