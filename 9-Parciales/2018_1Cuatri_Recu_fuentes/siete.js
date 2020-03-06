function mostrar()
{
     var acumuladorNotas=0
    var notaBaja;
    var sexoNotabaja;
    var contadorVaronesNotaBaja=0
    var sexo;
    var flag=0
    var notas;
for(var i=0;i<5;i++){
notas=parseInt(prompt("Ingrese nota (entre 1 y 10)"));
while(notas<1 || notas>10 || isNaN(notas)){
    notas=parseInt(prompt("Ingrese nota válida"));
}
sexo=prompt("Ingrese un sexo")
    while(sexo!="f" && sexo!="m"){
    sexo=prompt("Sexo invalido ingrese sexo")
    }
    acumuladorNotas=acumuladorNotas+notas;
if(flag==0|| notas<notaBaja){
    notaBaja=notas;
    sexoNotabaja=sexo;
    flag=1
}
if(notas<6 && sexo=="m"){
    contadorVaronesNotaBaja++

}



}
promedio=acumuladorNotas/i
alert("el promedio es"+promedio + "</br" +"La nota más baja es: "+notaBaja+" y su sexo es "+ sexoNotabaja+ "</br>"+ "La cantidad de varones desaprobados es: "+contadorVaronesNotaBaja)
}
