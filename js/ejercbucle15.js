// 15- Realiza un script que cuente el número de vocales que tiene un texto.

let texto = prompt("Ingrese un texto: ")

let nrovocales = 0

for (i = 0; i < texto.length; i++) {
    let vocal = texto.substr(i, 1)
    switch (vocal) {
        case "a":
            nrovocales++;
            break;
        case "e":
            nrovocales++;
            break;
        case "i":
            nrovocales++;
            break;
        case "o":
            nrovocales++;
            break;
        case "u":
            nrovocales++;
            break;
        default:
            break;
    }
}

document.write("La cantidad de vocales del texto es: " + nrovocales)