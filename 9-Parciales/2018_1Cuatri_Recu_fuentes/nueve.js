function mostrar()
{
   
    var animal;
    var pesoAnimal;
    var temperaturaHabitat;
    var pregunta;
    var contadorTemperaturasPares=0
    var animalPesado;
    var temperaturaAnimalPesado;
    var contadorAnimalesBajo0=0
   
    var pesoMaximobajo0
    var pesoMinimobajo0
    var contadorAnimales=0
    var acumuladorAnimales=0

  
    var flag=0
   
    do{
    animal=prompt("Ingrese un animal");
    pesoAnimal=parseInt(prompt("Ingrese peso de animal (entre 1 y 1000)"));
    while(pesoAnimal<1||pesoAnimal>1000||isNaN(pesoAnimal)){
            pesoAnimal=parseInt(prompt("Ingrese un peso valido"));
    }
    temperaturaHabitat=parseInt(prompt("Ingrese temperatura"))
    while(temperaturaHabitat<-30||temperaturaHabitat>30||isNaN(temperaturaHabitat)){
    temperaturaHabitat=prompt("ingrese temperatura valida");
    }


  

    if(temperaturaHabitat %2==0){
        contadorTemperaturasPares++;
    }
  
   
    if((flag==0||pesoAnimal>pesoMaximobajo0)&& temperaturaHabitat<0){
        pesoMaximobajo0=pesoAnimal
    }
     if((flag==0||pesoAnimal<pesoMinimobajo0)&& temperaturaHabitat<0){
       pesoMinimobajo0=pesoAnimal
       flag=1
   }
   
    if(temperaturaHabitat<0){
        contadorAnimalesBajo0++
    }
    acumuladorAnimales=acumuladorAnimales+pesoAnimal
    if(contadorAnimales==0|| pesoAnimal<animalPesado){
        animalPesado=animal;
        temperaturaAnimalPesado=temperaturaHabitat;

    }
    contadorAnimales++


    pregunta=prompt("Quiere seguir ingresando datos?(Ingrese si)");
    }while(pregunta=="si");

    promedioPesoAnimales=acumuladorAnimales/contadorAnimales;

  if(contadorAnimales=0){
      pesoMaximobajo0= "no se ingresaron valores";
      pesoMinimobajo0= "no se ingresaron valores";
  }


  

    document.write(" cantidad de temperaturas pares" + contadorTemperaturasPares+"</br>"+
    "b) El nombre del animal mas pesado es "+ animalPesado + "y la temperatura de su habitat "+temperaturaAnimalPesado+ "</br>"+
    "c) La cantidad de animales que viven a menos de 0 grado"+ contadorAnimalesBajo0 + "</br>" +
    "d) El promedio del peso de todos los animales."+ promedioPesoAnimales+"</br>"+
   " f) El peso máximo de los animales bajo 0 es :"+ pesoMaximobajo0 + "el peso minimo de los animales bajo 0: " + pesoMinimobajo0+"</br>")
}