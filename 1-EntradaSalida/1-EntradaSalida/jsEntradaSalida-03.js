/* VICTOR FLORES
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón 'mostrar'*/
function mostrar()
{

//en este caso Id = txtIdNombre

    var nombre;//declaro la variable

	//document.getElementById---(tomar un elemento por su identificador)
	//("txtIdNombre") ---Id del html (elemento que quiero que me traiga la funcion document.getElementById)--
    //value  ==> es el valor---(texto que esta escrito en la caja)

	nombre = document.getElementById("txtIdNombre").value; /*tomamos lo que esta escrito en la caja
                                                            (value) del ID ("txtIdNombre) del archivo HTML
															que lo trajimos con (document.getElementById)
															                                       */
	alert(nombre);//muestro lo quer escribimos en el Id a traves de la ventana emergente



}
//copio el nombre de la variable nombre dentro de la caja de texto en la pagina html
//document--son todos los archivos HTML

