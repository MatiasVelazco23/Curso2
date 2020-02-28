function mostrar()
{
  
    var numero = parseInt(prompt("Ingrese un Número"));
    
    var parcont=0;
    
    for (var contador = 1 ; contador <= numero ; contador++  )
    {
     
        if ( numero % contador == 0 )
    
        {
            console.log(contador);
            parcont++;
        }
        
    }
    console.log("cantidad de divisores " + parcont )
    
  


}//FIN DE LA FUNCIÓN