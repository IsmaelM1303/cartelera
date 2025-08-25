//Importaciones
import { createMovie } from "../services/crudPeliculas.js"
//Datos globales
const titulo =          document.getElementById("titulo")
const poster =          document.getElementById("poster")
const genero =          document.getElementById("genero")
const genero2 =         document.getElementById("genero2")
const anioLanzamiento = document.getElementById("anioLanzamiento")


document.getElementById("agregarPelicula"). addEventListener("click", validacionCrear)

function validacionCrear(){

    if(titulo != "", poster != "", genero != "", anioLanzamiento != ""){

        const nuevaPelicula = {
            tituloPelicula: titulo.value,
            posterUrl: poster.value,
            generos: genero.value + ", " + genero2.value,
            anio: anioLanzamiento.value
        }
        createMovie(nuevaPelicula)
        
    }
}
