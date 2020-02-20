/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var Largo;
    var Ancho;
    Largo=parseFloat(document.getElementById("Largo").value);
    Ancho=parseFloat(document.getElementById("Ancho").value);

    alert(Math.ceil((Largo*2+Ancho*2)*3));

}
function Circulo () 
{
    var Radio;
   pi=3.1416;
    Radio=parseFloat((document.getElementById("Radio").value));

    alert(Math.ceil(2*pi*Radio));
	
}
function Materiales () 
{
var Largo
var Ancho
Largo=parseFloat(document.getElementById("Largo").value);
    Ancho=parseFloat(document.getElementById("Ancho").value);

var cemento=(Largo*Ancho)*2;
var cal=(Largo*Ancho)*3;


    alert("Para este terreno se necesita "+cemento+" bolsas de cemento y "+cal+" bolsas de cal");

	
}