// 4 - Realiza un script que pida números hasta que se pulse“ cancelar”.
// Si no es un número deberá indicarse con un« alert» y seguir pidiendo números.
// Al salir con“ cancelar” deberá indicarse la suma total de los números introducidos.

let suma = 0
let numero = parseInt(prompt("Ingrese numero:"));
window.confirm("Esta seguro que desea continuar?")

while (confirm()) {
    numero = parseInt(prompt("Ingrese numero:"));
    if (isNaN(numero)) {
        window.alert("No es un numero");
        numero = 0
    }
    suma = suma + numero;
}
document.write("El Resultado es: " + suma)