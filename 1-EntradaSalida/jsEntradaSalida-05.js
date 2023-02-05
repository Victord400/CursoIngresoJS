/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{
// Primer paso es declarar las variables
var nombre;
var edad;
var mensaje;

//segundo asignar un valor a las variables
nombre = document.getElementById("txtIdNombre").value;    //el valor de lo que escriba en caja de texto va a ser la variable nombre en este caso
edad = document.getElementById("txtIdEdad").value;

//tercer paso calcular------concatenar(pegar una cadena de caracteres a otra cadena de caracteres) con el operador + (mas)
mensaje = " usted se llama " + nombre + " y tiene " + edad + " años ";/*mostramos la frase uniendo literales de cadena(STRING) con las variables en este caso nombre y edad
           |..literal......|  |variable|  |literal|  |var|   |literal| */ 

//cuarto paso mostrar el mensaje
alert(mensaje);

}

