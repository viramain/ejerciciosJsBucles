// 17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.

let texto = prompt("Ingrese un texto: ");

// posicion primera vocal
let posicion = 0;

// contador while
let i = 0;

// bandera para indicar primera vocal
let primeraVocal = 0;
do {
    if ((texto.substr(i, 1) == "a") || (texto.substr(i, 1) == "e") || (texto.substr(i, 1) == "i") || (texto.substr(i, 1) == "o") || (texto.substr(i, 1) == "u")) {
        posicion = i;
        primeraVocal = 1;
    }
    i++;
} while ((i < texto.length) && (primeraVocal == 0))

if (primeraVocal = 1) {
    document.write("La posición de la primera vocal es: " + posicion);
} else {
    document.write("No hay vocales en el texto.");
}