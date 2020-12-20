// 11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *

let nomb1 = prompt("Ingrese nombre de la primera persona:");
let edad1 = parseInt(prompt("Ingrese edad de la primera persona:"));

let nomb2 = prompt("Ingrese nombre de la segunda persona:");
let edad2 = parseInt(prompt("Ingrese edad de la segunda persona:"));

let nomb3 = prompt("Ingrese nombre de la tercera persona:");
let edad3 = parseInt(prompt("Ingrese edad de la tercera persona:"));

if (edad1 > edad2) {
    if (edad1 > edad3) {
        document.write("El mayor es: " + nomb1 + " con " + edad1 + " años.");
    } else {
        document.write("El mayor es: " + nomb3 + " con " + edad3 + " años.");
    }
} else {
    if (edad2 > edad3) {
        document.write("El mayor es: " + nomb2 + " con " + edad2 + " años.");
    } else {
        document.write("El mayor es: " + nomb3 + " con " + edad3 + " años.");
    }
}