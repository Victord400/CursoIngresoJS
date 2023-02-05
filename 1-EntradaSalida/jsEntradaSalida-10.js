/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{

//declado la variable  (las variables no se separan con espacio)
//en todo caso se escribe todo junto pero con la regla de empezar cada palabra con mayuscula
//lowercamelcase

var importeIngresado;
var porcentajeImporteIngresado;
var importeDescuento;
var importeTotal;


importeIngresado = document.getElementById("txtIdimporte").value;
porcentajeDescuentoIngresado = prompt("Ingrese el porcentaje");
iporteIngresado = parsefloat(importeIngresado);
importeDescuentoIngresado = parseFloat(porcentajeDescuentoIngresado);

importeDescuento = importeIngresado *0.2;
importeTotal = importeIngresado - importeDescuento;

document.getElementById("tctIdImporte").value = "el total a pagar es: $" + importeDescuento;

















}
//txtIdImporte	
//txtIdResultado

