let sumar = 0
for (let x = 1; x <= 10; x++) {
    sumar = sumar + x
    console.log("sumar" + sumar)

}
console.log("resultado" + sumar)


/* segundo ejercicio  */
let Numero = 11
if (Numero % 2 === 0) {
    console.log("par")
} else {
    console.log("impar")

}


/*La pizzería Pepitos requiere un algoritmo que permita informarle a los usuarios si reciben o
no un premio por parte del negocio, se tienen las siguientes validaciones:
1.Si es una persona menor o igual a 10 años, debe ir a reclamar un jugo.
2.Si es una persona mayor de edad (18 años) debe ir a reclamar una cerveza. 
3.Y si es una mujer, debe reclamar adicionalmente una porción de pizza Hawaiana.
O si es un hombre, debe reclamar adicionalmente una porción de pizza tres carnes.
Si no cumple ninguna de las condiciones, se le debe informar que desafortunadamente, no recibe ningún premio.
*/

let Genero = "Hombre"
let edad = 9
let premio

if (edad <= 10) {
    if (Genero == "Hombre") {
        console.log("reclamar jugo pizza de 3 carnes")

    } else if (Genero == "mujer") {

        console.log("reclamar cerveza  pizza hawaiana")

    }
} if (edad >= 18) {
    console.log("jugo")
    if (Genero == "mujer")
        console.log("reclamar cerveza y pizza haiwaina")

} else {


    console.log("noreclama")

}



/*
********
if (edad <= 10) {
    if (Genero == "Hombre") {
        console.log("reclamar jugo pizza de 3 carnes")

    } else if (Genero == "mujer") {

        console.log("reclamar cerveza  pizza hawaiana")

    }

    *******
let preio = "";
let premioAdicional = "";

if (edad <= 10) {
    premio = "Jugo";
} else if (edad >= 18) {
    premio = "Cerveza";
    if (genero === "mujer") {
        premioAdicional = "Pizza Hawaiana";
    } else if (genero === "hombre") {
        premioAdicional = "Pizza tres carnes";
    }
} else {
    premio = "Ningún premio";
}

return { premio: premio, premioAdicional: premioAdicional };
*/
