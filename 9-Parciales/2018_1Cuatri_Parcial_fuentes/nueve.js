function mostrar()
{
var marca;
var peso;
var temperatura; 
var seguir;
var contTemperaturasPares=0
var contProductos0grados;
var marcaMasPesado;
var contPeso=0
var acumuladorPeso=0
var promPeso
var pesoMax;
var pesoMin;
flag=0

do{
    marca=prompt("Ingrese Marca");
    temperatura=parseInt(prompt("Ingrese la temperatura Entre(-30 y 30)"))
    while(temperatura<-30 || temperatura>30 || isNaN(temperatura)){
        temperatura=parseInt(prompt("Ingrese temperatura valida"))
    }

    peso=parseInt(parseInt(prompt("Ingrese el peso Entre(1 y 100)")));
    while(peso<1 || peso>100 || isNaN(peso)){

    }
    //---------------------temperaturapares
    if (numero % 2 == 0) {
        contTemperaturasPares++;
    }
    //----------------------contar peso
    acumuladorPeso=acumuladorPeso+peso;
    contPeso++;
    
    
    //-------------------  peso
    if (peso < pesoMin || flag == 0) {
        pesoMin = peso;
        

    }
    if (peso> pesoMax|| flag == 0) {
        pesoMax = peso;
        marcaMasPesado =marca;
        flag = 1;
    }
    
    //-----------------marca
    //-----------------producto mas pesado
seguir=prompt("quiere seguir ingresando datos?")
}while(seguir=="si");

promPeso=acumuladorPeso/contPeso
document.write("a)La cantidad de temperaturas pares son"+contTemperaturasPares+ "</br>");
document.write("b)La marca de el producto más pesado es"+marcaMasPesado+ "</br>");
document.write("c)La cantidad de productos que se mantienen a 0 grados"+contProductos0grados+ "</br>");
document.write("d)El promedio del peso de todos los productos"+promPeso+ "</br>");
document.write("e)El peso màximo es"+pesoMax+"y el peso minimo es"+pesoMin+ "</br>");
}

////-------------------------------------------
function mostrar() {
    var temperatura;
    var marca;
    var peso;
    var contadorPares = 0;
    var contadorCong = 0;
    var marcaPesada;
    var pesoMaximoMas0;
    var pesoMaximo;
    var pesoMinimo;
    var promedioPeso;
    var acumuladorPeso = 0;
    var contador = 0;
    var seguir;
    var flag = 0;

    //--------------------------------------------

    do {
        marca = prompt("Ingrese marca: ");

        peso = parseInt(prompt("Ingrese un peso (1 y 100): "));
        while (peso < 1 || peso > 100 || isNaN(peso)) {
            peso = parseInt(prompt("Peso invalido. Ingrese un peso (1 y 100): "));
        }
        temperatura = parseInt(prompt("Ingrese un temperatura (-30 y 30): "));
        while (temperatura < -30 || temperatura > 30 || isNaN(temperatura)) {
            temperatura = parseInt(prompt("Temperatura invalida. Ingrese un temperatura (-30 y 30): "));
        }

        if (temperatura % 2 == 0) {
            contadorPares++;
        }

        if ((flag == 0 || peso > pesoMaximoMas0) && temperatura > 0) {
            pesoMaximoMas0 = peso;
            marcaPesada = marca;
            flag = 1;
        }

        if (temperatura < 0) {
            contadorCong++;
        }

        acumuladorPeso = acumuladorPeso + peso;

        if (contador == 0 || peso > pesoMaximo) {
            pesoMaximo = peso;
        }
        if (contador == 0 || peso < pesoMinimo) {
            pesoMinimo = peso;
        }

        contador++;

        seguir = prompt("Quiere continuar?:");
    } while (seguir == 's');

    promedioPeso = acumuladorPeso / contador;

    if( flag == 0){
        marcaPesada = "sin datos";
    }

    document.write("a) La cantidad de temperaturas pares: " + contadorPares + "</br>");
    document.write("b) La marca del producto más pesado no congelado: " + marcaPesada + "</br>");
    document.write("c) La cantidad de productos que se conservan a menos de 0 grados: " + contadorCong + "</br>");
    document.write("d) El promedio del peso de todos los productos: " + promedioPeso + "</br>");
    document.write("f) El peso máximo: " + pesoMaximo + " y el mínimo: " + pesoMinimo + "</br>");


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
