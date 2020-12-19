// 7- Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario 
// (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).

// 303030303030303030303030303030303030303030303030303030303030
// 2929292929292929292929292929292929292929292929292929292929
// 28282828282828282828282828282828282828282828282828282828
// …..
// 333
// 22
// 1

let ultnro = parseInt(prompt("Ingrese hasta qué número menor o igual a 50, desea realizar pirámide invertida: "));

if (ultnro <= 50) {
    for (let contador = ultnro;
        (contador != 0); contador--) {
        let repeticiones = contador;
        let i = 1;
        let linea = ""
        while (i <= repeticiones) {
            linea = linea + contador.toString(10);
            i++;
        }
        document.write(linea);
        document.write("<br>");
    }
} else {
    document.write("Atencion! Debe ingresar un valor menor o igual a 50.")
}