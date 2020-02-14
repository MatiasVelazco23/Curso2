/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
   var numero1;
   var numero2;
    numero1=parseInt(document.getElementById("numeroUno").value);
    numero2=parseInt(document.getElementById("numeroDos").value);
    var resultado= numero1+numero2;
    
   
  

    alert(resultado);
}

function restar()
{
    var numero1;
   var numero2;
    numero1=parseInt(document.getElementById("numeroUno").value);
    numero2=parseInt(document.getElementById("numeroDos").value);
    restar1=numero1-numero2
	alert(restar1);
}

function multiplicar()
{ 
    var numero1;
   var numero2;
    numero1=parseInt(document.getElementById("numeroUno").value);
    numero2=parseInt(document.getElementById("numeroDos").value);
    multiplicar1=numero1*numero2;
	alert(multiplicar1);
}

function dividir()
{
    var numero1;
   var numero2;
    numero1=parseInt(document.getElementById("numeroUno").value);
    numero2=parseInt(document.getElementById("numeroDos").value);
    dividir1=numero1/numero2;
	alert(dividir1);
}

