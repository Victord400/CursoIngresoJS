/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
//declaro las variables

var sueldo;
var aumento;//resultado//
var nuevoSueldo;

//asigno las variables y la transformo en y resuelvo operatorias

sueldo = parseInt(document.getElementById("txtIdSueldo").value);

aumento = sueldo * 10 / 100;   //diez dividido cien es una constante para resolver porcentajes
                                 //se puede resolver y poner valor fijo de 0,1 o .1 que es lo mismo en programacion
nuevoSueldo = sueldo + aumento;

//asigno y muestro el nuevo sueldo en el Id resultado

document.getElementById("txtIdResultado").value = nuevoSueldo;


	
}
//el nuevo sueldo lo compruebo sumandole al sueldo original el aumento
//el porcentaje se calcula multiplicando el valor por el porcentaje y lo divido por 100