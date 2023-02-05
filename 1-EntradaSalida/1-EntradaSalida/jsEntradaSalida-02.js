/* VICTOR FLORES
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()

{

	//creo la variable con la que voy a trabajar    --una variable es un espacio de memoria donde se guarda un dato (que se le pide al sist. op)-- 
	var nombre;


	//asigno el nombre del usuario a la variable dentro de prompt
    nombre = prompt("escriba su nombre");//eso que esta entre parentesis es el mensaje de defecto que aparece antes de comenzar a escribir

	
	//muestro el nombre en la ventana emergente 
	alert(nombre);
}
// si escribo un codigo fuera de la llave de apertura y cierre, la funcion se va a ejecurar apenas recargue la pagina--
// operador de asignacion signo "igual"  ( = )  -- se le asigna un nombre a la variable que tengamos--
//el prompt me deja escribir un dato(parametro de lo que quiero mostrar) y cuando apreto aceptar, me devuelve el dato(lo que el usuraio halla escrito en la caja de texto)


