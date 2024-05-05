let sumar = 0
let cantidad = 10
for (let x = 1; x <= cantidad; x++) {
    sumar = sumar + x
    console.log("sumar" + sumar)

}
console.log("resultado" + sumar)


let boton2 = document.getElementById("button2")
let input2 = document.getElementById("input2")
let parrafo2 = document.getElementById("parra2")

boton2.addEventListener("click", e => {
    let cantidad = parseInt(input2.value)


    let sumar = 0

    for (let x = 1; x <= cantidad; x++) {
        sumar = sumar + x

        parrafo2.innerHTML = sumar

    }


})





/* segundo ejercicio  */



let btn = document.getElementById("button")
let parrafo = document.getElementById("parra")
let input = document.getElementById("input")



btn.addEventListener("click", e => {
    let numero = parseInt(input.value)

    if (numero % 2 == 0) {
        parrafo.innerHTML = "es par"
    } else {
        parrafo.innerHTML = "es impar"
    }
})



/**TERCER EJERCICIO */

let parrafo3 = document.getElementById("parrafo3")
let edades = document.getElementById("inpunes2")
let formulario3 = document.querySelector("#formu")

formulario3.addEventListener("submit", evento => {
    evento.preventDefault()

    let genero = evento.target.inputGroupSelect02.value
    let edad = parseInt(evento.target.inpunes2.value)


    if (edad <= 10) {
        if (genero == "hombre") {
            parrafo3.innerHTML = "reclamar jugo  y pizza de 3 carnes"

        } else if (genero == "mujer") {

            parrafo3.innerHTML = "reclamar cerveza y  pizza hawaiana"

        }

    }
    if (edad >= 18) {

        if (genero == "hombre") {
            parrafo3.innerHTML = "reclamar cerveza y pizza de 3 carnes "

        } else if (genero == "mujer") {
            parrafo3.innerHTML = "reclamar cerveza y pizza haiwaina"
        }
    }
    if (edad > 10 && edad < 18) {

        parrafo3.innerHTML = "no reclama"

    }

})



// 5 punto 

let parrafo5 = document.querySelector("#parrafo5")
let boton5 = document.querySelector("#boton5")
boton5.addEventListener("click", function () {
    let input5 = document.querySelector("#input5").value
    let input55 = document.querySelector("#input55").value

    for (let i = 1; i <= input55; i++) {
        let multiplicar = `${input5} X ${i} = ${input5 * i}`

        parrafo5.innerHTML += multiplicar + "<br>"
    }
});



let input45=document.querySelector("#input45")
let input46=document.querySelector("#input46")
let boton45=document.querySelector("#boton45")
let texto=document.querySelector("#texto45")



