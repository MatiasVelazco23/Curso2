/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento() {
    var sueldo;
    var sueldoAumentado;
    var resultado;

    sueldo = parseInt(document.getElementById("sueldo").value);
    sueldoAumentado = (sueldo * 10) / 100
    resultado = (sueldo + sueldoAumentado);
    document.getElementById("resultado").value = resultado;









}
