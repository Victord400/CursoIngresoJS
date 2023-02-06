/*
Debemos lograr tomar Los numeros por ID value ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	//declaro las variables
	var dividendo;
	var divisor;
	var resto;
	
    //asignamos las variables y las convertimos a entero//
	dividendo = parseInt(document.getElementById("txtIdNumeroDividendo").value);
	divisor = parseInt(document.getElementById("txtIdNumeroDivisor").value);
	resto = dividendo % divisor;   // para calcular el resto se utiliza la operacion aritmetica resto o modulo ( % )
	                               //NOTA: LA OPERACION ES DIVISOR % DIVIDENDO, PERO COMO LA LECTURA ES DE DERECHA A IZQUIERDA SE COLOCA AL REVEZ

	//creamos la ventana emergente alert con el mensaje concatenado 						   
    alert("el resto es " + resto); 




}


//al colocar el cursor en una posicion y con la tecla alt apretada se puede escribir en varias lineas al mismo tiempo

/*ejemplo de como se resuelve un calculo con diferentes operadores aritmeticos

var x = 40;
var y = 20;
var z = 10;

var resultado

resultado = x + y * z;      ----tiene mas prioridad el *(mult),la /(div) y el modulo (%) que el +(mas) y el - (menos)
                            ----en el caso que la operacion sean de signos con mayor prioridad, en este caso se resuelve de izquierda a derecha
                            ----el tope de prioridad lo obtienen los parentesis(----)
aler(resultado);					
*/



