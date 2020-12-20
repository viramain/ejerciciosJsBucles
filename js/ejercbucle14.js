// 14- Realiza un script que pida una cadena de texto y 
// lo muestre poniendo el signo – entre cada carácter sin usar el método replace. 
// Por ejemplo, si tecleo “hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”.

let cadena = prompt("Ingrese una cadena: ")
let cadenaguion = ""

for (i = 0;
    (i < cadena.length); i++) {
    if (i == 0) {
        cadenaguion = cadena.substr(i, 1)
    } else {
        cadenaguion = cadenaguion + "-" + cadena.substr(i, 1)
    }
}
document.write("La Cadena resultante es: " + cadenaguion)