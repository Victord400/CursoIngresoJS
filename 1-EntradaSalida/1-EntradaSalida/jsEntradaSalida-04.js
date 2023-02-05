/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()

{
    //declaramos la variable ---recervo espacio en memoria para guardar el nombre del usuario
    var nombre;


    //le pedimos el nombre al usuario a traves de la funcion prumpt
    nombre = prompt("ingrese su nombre");     //---asignas a la variable nombre el texto que escribio el usuario dentro de prompt

    //copio el nombre que tengo guardado en la variable nombre de la caja de texto enbebida en la pagina HTML
    document.getElementById("txtIdNombre").value = nombre;     //------el valor de esta caja de texto va a ser lo que tenga en la variable nombre
//  |.........caja de texto..............||.valor.|.variable nombre.|

}

/*tipos de datos
var numero;

numero = "2";-----formato tde tipo string (cadenas de caracteres en español)
numero = 2; ----formato de tipo number

var boolean;
boolean = true;
boolean = false; 

//funciones de salida
alert("hola a todos");
document.getElementById("idNombre").value = "mariana";  //mostraria mariana

//funciones de entrada
nombre = prompt("Ingrese un nombre");
nombre = document.getElementById(txtIdNombre).value;
*/