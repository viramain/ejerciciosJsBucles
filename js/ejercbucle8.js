// 8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario 
//(no mayor de 50) 

// 1
// 12
// 123
// 1234
// 12345
// 123456
// ……


let ultnro = parseInt(prompt("Ingrese hasta qué número menor o igual a 50, desea realizar la pirámide: "));

if (ultnro <= 50) {
    for (let contador = 1;
        (contador <= ultnro); contador++) {
        let repeticiones = contador;
        let i = 1;
        let linea = ""
        while (i <= repeticiones) {
            linea = linea + contador.toString(10);
            i++;
        }
        document.write(linea + "<br>");
    }
} else {
    document.write("Atencion! Debe ingresar un valor menor o igual a 50.")
}