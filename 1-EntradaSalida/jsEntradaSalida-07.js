/*
Debemos lograr tomar Los numeros por ID.value ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	//declaramos las variables
	var numero1;
	var numero1;
	var resultado;
	
	//asignamos las variables y las convertimos en enteros
	numero1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);

	//hacemos la operacion
	resultado = numero1 + numero2;

	//mostramos el mensaje emergente con el resultado
	alert("la suma es " + resultado);

}      //la suma es el unico operador que necesita del parseIntpara realizar el calculo
      //el resto de las operaciones da igual ponerlos o no ponerlos, solo en javascript

function restar()      
{

	var numero1;
	var numero1;
	var resultado;

	numero1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);   

	resultado = numero1 - numero2;

	alert(" la resta es " + resultado)
}

function multiplicar()
{ 
	var numero1;
	var numero1;
	var resultado;

	numero1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);

	resultado = numero1 * numero2;

	alert(" la multiplicacion es " + resultado)
}

function dividir()
{
	var numero1;
	var numero1;
	var resultado;

	numero1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);

	resultado = numero1 / numero2;

	alert(" la division es "+ resultado);

}





/*operadores---->aritmeticos { +(suma), -(resta) , / (division), * (multiplicacion) y %(resto)}
            ---->relacionales
			---->logicos

			*/


