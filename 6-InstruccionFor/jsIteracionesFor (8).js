function mostrar()
{

    
        var n = parseInt(prompt("Ingresa un numero"));
    
        for(var i = 2; i < n; i++){
            if(n % i == 0){
                alert("No es primo");
                break;
            } else {
                alert("Es primo");
                break;
            }
        }
    
    
    
}//FIN DE LA FUNCIÓN


