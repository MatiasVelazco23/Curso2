function mostrar() {
    var flag = 0
    var letra;
    var numero;
    var seguir;
    var contpos = 0
    
    var conpares = 0
    var conimpar = 0
    var conCeros
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
        if(numero==0){
            conCeros++
        }
        if (numero > 0) {
            contpos++;
            acumuladorPos++;
        
        }
        else {
            acumuladorNeg = acumuladorNeg + numero
        
        
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
    if (numero < numeroMinimo || flag == 0) {
        numeroMinimo= numero;
        letraMin = letra;
        flag = 1;
       }
    else if(numero> numeroMaximo || flag==0){
        numeroMaximo=numero
        letraMax=letra
        flag=1
    }
    promPositiv=acumuladorPos/contpos;
        document.write("a) Cantidad de numeros pares: " + conpares + "</br>" + "b) Cantidad de numeros impares: " + conimpar + "</br>" + "c) Cantidad de ceros: " + conCeros + "</br>" + "d) Promedio de todos los numeros positivos: " + promPositiv +
            "</br>" + "e) Suma de todos los numeros negativos:" + acumuladorNeg +
            "</br>" + "f) Numero y letra del maximo: " + numeroMaximo + letraMax +
            "</br>" + "f) Numero y letra del minimo:" + numeroMinimo + letraMin);

}

