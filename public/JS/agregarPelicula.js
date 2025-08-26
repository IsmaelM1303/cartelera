//Importaciones
import { createMovie } from "../services/crudPeliculas.js"
import { mostrarPeliculas } from "./mostrarPeliculas.js"
//Datos globales
const titulo =          document.getElementById("titulo")
const poster =          document.getElementById("poster")
const genero =          document.getElementById("genero")
const genero2 =         document.getElementById("genero2")
const anioLanzamiento = document.getElementById("anioLanzamiento")


document.getElementById("agregarPelicula"). addEventListener("click", validacionCrear)

function validacionCrear(){

    if(titulo.value != "", poster.value != "", genero.value != "", anioLanzamiento.value != "", anioLanzamiento>=1930 && anioLanzamiento< 2099){

        const nuevaPelicula = {
            tituloPelicula: titulo.value,
            posterUrl: poster.value,
            generos: genero.value + ", " + genero2.value,
            anio: anioLanzamiento.value
        }
        limpiarInputs()
        createMovie(nuevaPelicula)
        
    }
}

function limpiarInputs(){
    titulo.value = ""
    poster.value = ""
    genero.value = ""
    genero2.value = ""
    anioLanzamiento.value = ""
}
