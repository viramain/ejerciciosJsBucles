// 2- Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los siguientes rangos de nota:

// 0-2: Muy deficiente
// 3-4: Insuficiente
// 5-6: Suficiente
// 7: Bien
// 8-9: Notable
// 10: Sobresaliente

// Si ingreso un numero que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”. Si el numero ingresado no es válido mostrar el mensaje “Introduce un número válido”.


let nota = parseInt(prompt("Ingrese una nota (numero) de 0 a 10:"))

if (nota >= 0 && nota <= 10) {
    switch (nota) {
        case 0:
            window.alert("Muy Deficiente")
            break;
        case 1:
            window.alert("Muy Deficiente")
            break;
        case 2:
            window.alert("Muy Deficiente")
            break;
        case 3:
            window.alert("Insuficiente")
            break;
        case 4:
            window.alert("Insuficiente")
            break;
        case 5:
            window.alert("Suficiente")
            break;
        case 6:
            window.alert("Suficiente")
            break;
        case 7:
            window.alert("Bien")
            break;
        case 8:
            window.alert("Notable")
            break;
        case 9:
            window.alert("Notable")
            break;
        case 10:
            window.alert("sobresaliente")
            break;
    }
} else {
    window.alert("Numero Erroneo. Introduce un número válido")
}


// if (nota >= 0 && nota <= 10) {
//     if (nota >= 0 || nota <= 2) {
//         window.alert("Muy Deficiente")
//     } else {
//         if (nota >= 3 || nota <= 4) {
//             window.alert("Insuficiente")
//         } else {
//             if (nota >= 5 || nota <= 6) {
//                 window.alert("Suficiente")
//             } else {
//                 if (nota = 7) {
//                     window.alert("Bien")
//                 } else {
//                     if (nota >= 8 || nota <= 9) {
//                         window.alert("Notable")
//                     } else {
//                         window.alert("Sobresaliente")
//                     }
//                 }
//             }
//         } else {
//             window.alert("Numero Erroneo. Introduce un número válido 1.")
//         }
//     } else {
//         window.alert("Numero Erroneo. Introduce un número válido 2.")
//     }