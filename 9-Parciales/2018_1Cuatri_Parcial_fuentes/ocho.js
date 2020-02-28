function mostrar() {
    var flag = 0
    var letra;
    var numero;
    var seguir;
    var contpos = 0
    var contneg = 0
    var conpares = 0
    var conimpar = 0
    var promPositiv = 0
    var acumuladorPos = 0
    var acumuladorNeg = 0
    var letraMax;
    var letraMin;
    var numeroMaximo;
    var numeroMinimo;
    do {
        letra = prompt("Ingrese Letra");
        numero = parseInt(prompt("Ingrese el numero"));
        while (numero < -100 || numero > 100 || isNaN(numero)) {
            numero = parseInt(prompt("Ingrese un número válido"));
        }
        if (numero > 0) {
            contpos++;
            acumuladorPos++;
        
        }
        else {
            acumuladorNeg = acumuladorNeg + numero
            contneg++;
        
        }
        if (numero % 2 == 0) {
            conpares++;
    
        }
        else {
            conimpar++;
    
        }
        seguir = (prompt("Quiere seguir ingresando datos?"))

    } while (seguir == "si")

    if (contpos != 0) {
        promPositiv = acumuladorPos / contpos;
    }
    if (numero < numeroMin || flag == 0) {
        numeroMin= numero;
        letraMin = letra;
        flag = 1;
       }
    else if(numero> numeroMax || flag==0){
        numeroMax=numero
        letraMax=letra
        flag=1
    }
        document.write("a) Cantidad de numeros pares: " + conpares + "</br>" + "b) Cantidad de numeros impares: " + cantidadImpares + "</br>" + "c) Cantidad de ceros: " + cantidadCeros + "</br>" + "d) Promedio de todos los numeros positivos: " + promedioPositivo +
            "</br>" + "e) Suma de todos los numeros negativos:" + acumuladorNeg +
            "</br>" + "f) Numero y letra del maximo: " + numeroMax + letraMax +
            "</br>" + "f) Numero y letra del minimo:" + numeroMin + letraMin);

}

