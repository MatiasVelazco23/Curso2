/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/






function Sumar () 
{
    
var P1;
var P2;
var P3;
    P1=parseInt((document.getElementById("PrecioUno").value));
P2=parseInt((document.getElementById("PrecioDos").value));
P3=parseInt((document.getElementById("PrecioTres").value));
 var Suma=parseInt(P1+P2+P3);
 alert(Suma);

}
function Promedio () 
{
    var P1;
var P2;
var P3;
    P1=parseInt((document.getElementById("PrecioUno").value));
P2=parseInt((document.getElementById("PrecioDos").value));
P3=parseInt((document.getElementById("PrecioTres").value));
 var Promedio=parseInt((P1+P2+P3)/3); //Hay algun operador?
 alert(Promedio);
	
}
function PrecioFinal () 
{
var P1;
var P2;
var P3;
P1=parseInt((document.getElementById("PrecioUno").value));
P2=parseInt((document.getElementById("PrecioDos").value));
P3=parseInt((document.getElementById("PrecioTres").value));
 var Pfinal=parseInt ((P1+P2+P3)+ ((P1+P2+P3)*21)/100); //Si ponía el % adelante me daba otro resultado

 alert(Pfinal); //Hay algun operador?
 
	
}