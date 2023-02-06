/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{

//declaro las variables

var importe;
var descuento;//resultado//
var importeFinal;

//asigno las variables y la transformo en y resuelvo operatorias

importe = parseInt(document.getElementById("txtIdImporte").value);

descuento = importe * 25 / 100;   
importeFinal = importe - descuento;

//asigno y muestro el nuevo importeFinal en el Id resultado

document.getElementById("txtIdResultado").value = importeFinal;

}
//txtIdImporte	
//txtIdResultado
//lowercame es el termino a escribir las variables con una mayuscula intermedia quedando como efecto de onda|

