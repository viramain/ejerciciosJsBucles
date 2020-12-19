// 9- Crea un script que escriba los números del 1 al 500, 
//que indique cuáles son múltiplos de 4 y de 9 y que cada 5 líneas muestre una línea horizontal. 
//Por ejemplo :

// 1
// 2
// 3
// 4 (Múltiplo de 4)
// 5-
// ————————————————————-

// 6
// 7
// 8 (Múltiplo de 4)
// 9 (Múltiplo de 9)
// 10

for (let contador = 1;
    (contador <= 500); contador++) {
    let multiplo = "";

    if ((contador % 4) == 0) {
        multiplo = "4";
    }
    if ((contador % 9) == 0) {
        multiplo = "9";
    }
    if ((contador % 5) == 0) {
        multiplo = "5";
    }

    switch (multiplo) {
        case "4":
            document.write(contador + " (Multiplo de 4)<br>");
            break;
        case "5":
            document.write(contador + "<br><hr>");
            break;
        case "9":
            document.write(contador + " (Multiplo de 9)<br>");
            break;
        default:
            document.write(contador + "<br>");
    }
}