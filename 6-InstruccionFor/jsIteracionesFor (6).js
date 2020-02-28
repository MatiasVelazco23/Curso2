function mostrar() {
 

  numero = parseInt(prompt("Ingrese un número"));
  var contadorDivisores = 0

    while (isNaN(numero)) {
        numero = parseInt(prompt("Ingrese un número"))
    }
    for (var i = 1; i<= numero; i++) {
        if (i % numero == 0) {
            console.log(i)
            contadorDivisores++;
        }
    }
    console.log("Cantidad de pares encontrados" + contadorPares);



}//FIN DE LA FUNCIÓN