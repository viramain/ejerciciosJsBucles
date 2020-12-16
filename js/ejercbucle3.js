// 3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

let resultado = ""
let cadena = ""

window.confirm("Esta seguro que desea continuar?")
while (confirm()) {
    cadena = prompt("Ingrese una cadena de texto:");
    resultado = resultado + "-" + cadena;
    cadena = "";
}
document.write("El Resultado es: " + resultado)