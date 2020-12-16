// 4 - Realiza un script que pida números hasta que se pulse“ cancelar”.
// Si no es un número deberá indicarse con un« alert» y seguir pidiendo números.
// Al salir con“ cancelar” deberá indicarse la suma total de los números introducidos.

let resultado = 0;
do {
    let numero = parseInt(prompt("Ingrese un numero:"));
    if (isNaN(numero)) {
        window.alert("No corresponde a un numero. Ingrese nuevamente.");
    } else {
        resultado = resultado + numero;
    }
} while (confirm("Desea continuar ingresando cadenas?"));
document.write("La suma total de los numeros ingresados es: " + resultado)