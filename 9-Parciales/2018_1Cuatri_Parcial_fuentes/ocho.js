function mostrar() {
    var flag = 0
    var letra;
    var numero;
    var seguir;
    var contpos = 0

    var conpares = 0
    var conimpar = 0
    var conCeros = 0
    var promPositiv = 0
    var acumuladorPos = 0
    var contpos=0
    var acumuladorNeg = 0
    var letraMax;
    var letraMin;
    var numeroMaximo;
    var numeroMinimo;
    do {
        letra = prompt("Ingrese Letra");
        while (!((letra >= "A" && letra <= "Z") || (letra >= "a" && letra <= "z"))) {
            letra = parseInt(prompt("Ingrese letra valida"));
        }
        numero=parseInt(prompt("Ingrese numero"));
        while (numero < -100 || numero > 100 || isNaN(numero)) {
            numero = parseInt(prompt("Ingrese un número válido"));
        }
        //------------------------Mayor-menor----------------//
        if (numero == 0) {
            conCeros++
        }
        else if (numero > 0) {
            contpos++;
            acumuladorPos = acumuladorPos + numero;

        }
        else {
            acumuladorNeg = acumuladorNeg + numero


        }
        //--------------------pares/impares--------------------------//
        if (numero % 2 == 0) {
            conpares++;

        }
        else {
            conimpar++;

        }
        //-----------------------maximo/minimo--------///
        if (numero < numeroMinimo || flag == 0) {
            numeroMinimo = numero;
            letraMin = letra;
    
        }
        if (numero > numeroMaximo || flag == 0) {
            numeroMaximo = numero;
            letraMax = letra;
            flag = 1;
        }

        seguir = (prompt("Quiere seguir ingresando datos?"))

    } while (seguir == "si")

    if (contpos != 0) {
        promPositiv = acumuladorPos / contpos;
    }
    
   


    document.write("a) Cantidad de numeros pares: " + conpares + "</br>" + "b) Cantidad de numeros impares: " + conimpar + "</br>" + "c) Cantidad de ceros: " + conCeros + "</br>" + "d) Promedio de todos los numeros positivos: " + promPositiv.toFixed(2) +
        "</br>" + "e) Suma de todos los numeros negativos:" + acumuladorNeg +
        "</br>" + "f) Numero y letra del maximo: " + numeroMaximo + letraMax +
        "</br>" + "g) Numero y letra del minimo:" + numeroMinimo + letraMin);

}

//------------------------------------
function mostrar() {
    var letra;
    var numero;
    var seguir;
    var contadorPares = 0;
    var contadorImpares = 0;
    var contadorCeros = 0;
    var acumuladorPos = 0;
    var contadorPos = 0;
    var promedioPos = 0;
    var acumuladorNeg = 0;
    var numeroMax;
    var numeroMin;
    var letraMax;
    var letraMin;
    var flag = 0;


    do {
        letra = prompt("Ingrese una letra: ");
        while (!((letra >= 'A' && letra <= 'Z') || (letra >= 'a' && letra <= 'z'))) {
            letra = prompt("Eso no es una letra. Ingrese una letra: ");
        }

        numero = parseInt(prompt("Ingrese un numero (-100 y 100): "));
        while (numero < -100 || numero > 100 || isNaN(numero)) {
            numero = parseInt(prompt("Numero invalido. Ingrese un numero (-100 y 100): "));
        }

        // ---------Pares-----------
        if (numero % 2 == 0) {
            // par
            contadorPares++;
        }
        else {
            // impar
            contadorImpares++;
        }

        // ------------- Signo------------------

        if (numero > 0) {
            // positivos
            acumuladorPos = acumuladorPos + numero;
            contadorPos++;
        }
        else if (numero < 0) {
            // negativos
            acumuladorNeg = acumuladorNeg + numero;
        }
        else {
            // cero
            contadorCeros++;
        }

        // ------------- Maximos y minimos ---------------
        if (flag == 0 || numero < numeroMin) {
            numeroMin = numero;
            letraMin = letra;
        }
        if (flag == 0 || numero > numeroMax) {
            numeroMax = numero;
            letraMax = letra;
            flag = 1;
        }

        seguir = prompt("Quiere continuar?:");
    } while (seguir == 's');

    if (contadorPos != 0) {
        promedioPos = acumuladorPos / contadorPos;
    }

    document.write("a) Cantidad de números pares: " + contadorPares + "</br>");
    document.write("b) Cantidad de números impares: " + contadorImpares + "</br>");
    document.write("c) Cantidad de ceros: " + contadorCeros + "</br>");
    document.write("d) Promedio de todos los números positivos ingresados: " + promedioPos.toFixed(2) + "</br>");
    document.write("e) La suma de todos los números negativos: " + acumuladorNeg + "</br>");
    document.write("f) Número Máximo: " + numeroMax + " Letra: " + letraMax + "</br>");
    document.write("f) Número Minimo: " + numeroMin + " Letra: " + letraMin + "</br>");

}
