// 10- Realiza un script que pida número de filas y columnas y escriba una tabla. 
//Dentro cada una de las celdas deberá escribirse un número consecutivo en orden descendente. 
//Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.

let filas = parseInt(prompt("Ingrese Cantidad de Filas: "));
let columnas = parseInt(prompt("Ingrese Cantidad de Columnas: "));

let nromax = filas * columnas;
let arreglo = [];

for (let cantfilas = 1;
    (cantfilas <= filas); cantfilas++) {

    for (let cantcolumn = 1;
        (cantcolumn <= columnas); cantcolumn++) {

        arreglo[cantcolumn] = nromax;
        nromax--;
        document.write(arreglo[cantcolumn] + " - ");
    }
    document.write("<br>");
}