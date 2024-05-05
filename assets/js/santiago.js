
/* Primero variable*/

let nombre = "Hola Mundo ";

console.log(nombre);

/* tipado dinamico */

let numero = 42;
let nombre1 = "  Hi universo";
let verdadero = true
let undef;
let nula = null;

console.log(typeof numero);
console.log(typeof nombre);
console.log(typeof verdadero);
console.log(typeof undef);
console.log(typeof nula);


//*para comentarios largos  */
//para solo un comentario 



/*objestos: una agrupacion de datos que tienen sentido tenerlos juntos  */
let nombre3 = "santiago";
let anime = "dark sell";
let edad = 23;

let personajes = {
    nombre3: "santiago",
    anime: "dark sell",
    edad: 23,
}
console.log(personajes)

/*Ejercicio de Nombre : Ancho y alto
8k 7680 x 4320
4k 3840 x 2160
WQHD 2560 x 1440
FHD 1920 x 1080
HD 1280 X 720 */


function resolucion (ancho, alto) {
    if (ancho >= 7680 && alto >= 4320) {
        return "8k"
    } else if (ancho >= 3840 && alto >= 2160) {
        return "4k"
    } else if (ancho >= 2560 && alto >= 1440) {
        return "WQHD"
    } else if (ancho >= 1920 && alto >= 1080) {
        return "FHD"
    } else if (ancho >= 1280 && alto >= 720) {

    }else{
        return false;
    }

    
}

let nobe = resolucion(8500, 768);
console.log(nobe);



function multiplicar( )




