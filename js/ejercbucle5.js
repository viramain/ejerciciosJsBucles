// 5- Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de identidad).
// El algoritmo para calcular la letra del dni es el siguiente :
// El número debe ser entre 0 y 99999999
// Debemos calcular el resto de la división entera entre el número y el número 23.
// Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E)
// Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
// Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».

let dni = parseInt(prompt("Ingrese DNI:"));
let resto = 0;

do {
    let dni = parseInt(prompt("Ingrese DNI:"));
    if (isNaN(dni) && (dni < 0 || dni > 99999999)) {
        window.alert("No corresponde a un numero. Ingrese nuevamente.");
    } else {
        resto = dni % 23;
        switch (resto) {
            case 0:
                document.write("La letra correspondiente al DNI es T <br>");
                break;
            case 1:
                document.write("La letra correspondiente al DNI es R <br>");
                break;
            case 2:
                document.write("La letra correspondiente al DNI es W <br>");
                break;
            case 3:
                document.write("La letra correspondiente al DNI es A <br>");
                break;
            case 4:
                document.write("La letra correspondiente al DNI es G <br>");
                break;
            case 5:
                document.write("La letra correspondiente al DNI es M <br>");
                break;
            case 6:
                document.write("La letra correspondiente al DNI es Y <br>");
                break;
            case 7:
                document.write("La letra correspondiente al DNI es F <br>");
                break;
            case 8:
                document.write("La letra correspondiente al DNI es P <br>");
                break;
            case 9:
                document.write("La letra correspondiente al DNI es D <br>");
                break;
            case 10:
                document.write("La letra correspondiente al DNI es X <br>");
                break;
            case 11:
                document.write("La letra correspondiente al DNI es P <br>");
                break;
            case 12:
                document.write("La letra correspondiente al DNI es N <br>");
                break;
            case 13:
                document.write("La letra correspondiente al DNI es J <br>");
                break;
            case 14:
                document.write("La letra correspondiente al DNI es Z <br>");
                break;
            case 15:
                document.write("La letra correspondiente al DNI es S <br>");
                break;
            case 16:
                document.write("La letra correspondiente al DNI es Q <br>");
                break;
            case 17:
                document.write("La letra correspondiente al DNI es V <br>");
                break;
            case 18:
                document.write("La letra correspondiente al DNI es H <br>");
                break;
            case 19:
                document.write("La letra correspondiente al DNI es L <br>");
                break;
            case 20:
                document.write("La letra correspondiente al DNI es C <br>");
                break;
            case 21:
                document.write("La letra correspondiente al DNI es K <br>");
                break;
            case 22:
                document.write("La letra correspondiente al DNI es E <br>");
                break;
            default:
                if (isNaN(dni)) {
                    window.alert("El DNI ingresado NO es un numero. Intente nuevamente.");
                    dni = 0
                }
        }
    }
} while (confirm("Desea continuar ingresando DNI?"));