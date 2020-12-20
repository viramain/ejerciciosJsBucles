// 16- Realiza un script que pida una cadena de texto y la devuelva al revés.
//  Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.

let cadena = prompt("Ingrese un texto: ");
let array = [];
let cadenaInvertida = ""

// almaceno cadena en array
for (i = 0;
    (i < cadena.length); i++) {
    array[i] = cadena.substr(i, 1);
}

// recorro array al reves para invertir cadena
for (i = cadena.length - 1;
    (i >= 0); i--) {
    cadenaInvertida = cadenaInvertida + array[i];
}

document.write("La cadena Ingresada fue: " + cadena + "<br>")
document.write("La cadena INVERTIDA es: " + cadenaInvertida)