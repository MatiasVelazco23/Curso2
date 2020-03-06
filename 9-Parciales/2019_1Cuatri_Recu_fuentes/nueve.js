function mostrar() {
    var edad;
    var sexo;
    var nota;
    var seguir;
    var contadorVaronesAprobados = 0
    var acumuladorNotasMenores = 0
    var contadorAdolescentes = 0
    var acumuladorNotaAdolescentes = 0
    var contadorMayores = 0
    var contadorMenores=0
    var acumuladorNotaMayores = 0
    var acumuladorFemenino=0
    var contadorFemenino=0
    var contadorMasculino=0
    var acumuladorMasculino=0
    var promAdolescentes
    var promFemenino 
    var promMasculino
    var promMayores
    var promMenores

    do {
        edad = parseInt(prompt("Ingrese edad"));
        while (edad <= 0 || isNaN(edad)) {
            edad = parseInt(prompt("Ingrese edad valida"));
        }
        sexo = prompt("Ingrese sexo (f o m)");
        while (sexo != "f" && sexo != "m") {
            sexo = prompt("Ingrese un sexo valido");
        }
        nota = parseInt(prompt("Ingrese Nota"));
        while (nota < 0 || nota > 10 || isNaN(nota)) {
            nota = parseInt(prompt("Ingrese una nota válida"));
        }
        if (sexo == "m" && nota >= 6) {
            contadorVaronesAprobados++
        }
        if (edad < 18) {
            acumuladorNotasMenores = acumuladorNotasMenores + nota;
            contadorMenores++;
        }
        if (edad > 15 && edad < 18) {
            acumuladorNotaAdolescentes = acumuladorNotaAdolescentes + nota;
            contadorAdolescentes++;
        }
        if (edad >= 18) {
            acumuladorNotaMayores = acumuladorNotaMayores + nota;
            contadorMayores++
        }
        if (sexo == "f") {
            acumuladorFemenino = acumuladorFemenino + nota
            contadorFemenino++
        }
        if (sexo == "m") {
            acumuladorMasculino = acumuladorMasculino + nota
            contadorMasculino++
        }
    seguir = prompt("Quiere seguir ingresando datos?(Escriba si)");
    } while (seguir == "si");
    

    if(contadorMenores!=0){
    promMenores = acumuladorNotasMenores / contadorMenores;
    }
    if(contadorMayores!=0){
    promMayores = acumuladorNotaMayores / contadorMayores
    }
    if(contadorAdolescentes!=0){
    promAdolescentes = acumuladorNotaAdolescentes / contadorAdolescentes
    }
    if(contadorMasculino!=0){
    promMasculino = 0
    
    }
    if(contadorFemenino!=0){
    promFemenino = acumuladorFemenino / contadorFemenino
    }




    document.write("Cantidad de varones aprobados" + contadorVaronesAprobados + "</br>" + "el promedio de los menores de edad es" + promMenores + "</br>"
        + "el promedio de los adolescentes es" + promAdolescentes + "</br>"
        + "el promedio de los masculinos es" + promMasculino + "</br>"
        + "el promedio de los masculinos es" + promMayores + "</br>"
        + "el promedio de los femeninos es" + promFemenino + "</br>")
}

