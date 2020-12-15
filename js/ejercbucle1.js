//1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.

let edad = parseInt(prompt("Por favor ingrese su edad:"));

if (edad >= 18 && edad <= 80) {
    document.write("Ya puede Conducir")
} else {
    document.write("NO puede Conducir")
}