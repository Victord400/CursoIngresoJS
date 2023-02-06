/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	//declaro las variables 
	var numero1
	var numero2
	var resultado

	//las asigno y las convierto a enteros(numeros)
	numero1 = parseInt(document.getElementById("txtIdNumeroUno").value);   //tambien se escribir---- numero1 = document.getElementById("txtIdNumeroUno").value;
	numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);                      //-----numero1 = parseInt(numero1)
	resultado = numero1 + numero2;

	// se escribe el mensaje emergente concatenado el string("la suma es")+ el resultado
	alert("la suma es " + resultado);





}
//parseInt----->convertir algo de tipo cadena(STRING) en numero(NUMBER)<---PARSEAR
/*ej:

var num1 = "20"    --declaro variable y i asigno al mismo tiempo--

num1 = parseInt(num1);    --convierto la cadena de string("20") a numero--(20)

//parceFloat----->convierte tipo cadena a numero pero a diferencia del parceInt este numero es con coma(,)



//Nan----->not a number<----
//concatenar: se refiere a unir dos o mas strings para formar una sola
//sumar: la suma se refiere a la adiccion de dos o mas numeros para obtener el total

    string + string---> el resultado es string
    string + number--->  "   "       "  string

 * solamente el operador mas(+) funciona como suma cuando ambos operandos son del tipo number
	*/


