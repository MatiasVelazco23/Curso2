function mostrar()
{
    var altura;
    var contadorAltura=0
    var acumuladorAltura=0
    var alturaBaja;
    var sexoAlturabaja;
    var flag=0
    var contadorMujeres190=0
for(var i=0;i<5;i++){
    altura=parseInt(prompt("Ingrese altura(entre 0 y 250)"));
    while(altura<0 || altura>250){
        altura=parseInt(prompt("Ingrese una altura valida"))
    }
    sexo=prompt("Ingrese sexo (f o m)");
    while(sexo!="m" && sexo!="f"){
        sexo=prompt("Ingrese sexo valido")
    }
    contadorAltura++;
    acumuladorAltura=acumuladorAltura+altura;
   

    if(altura<alturaBaja||flag==0){
        alturaBaja=altura
        sexoAlturabaja=sexo
        flag=1
    }
    if(sexo=="f" && altura>190){
        contadorMujeres190++
    }
}
promedioAlturas=acumuladorAltura/contadorAltura
alert("el promedio de alturas es"+ promedioAlturas)
alert("La altura más baja es: " +alturaBaja+" y su sexo es "+sexoAlturabaja)
alert("La cantidad de mujeres que supera los 190 cm son" + contadorMujeres190)
}
