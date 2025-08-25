//Importaciones
import { getMovie } from "../services/crudPeliculas.js"

//Datos globales
const contenedorPeliculas = document.getElementById("contenedorPeliculas")

// Mostrar peliculas en el DOM
async function mostrarPeliculas() {
    try {
        contenedorPeliculas.innerHTML = ""
        const peliculas = await getMovie()
        contenedorPeliculas.innerHTML = ""

        peliculas.forEach(pelicula => {
            crearMostrar(pelicula)
        })
    } catch (error) {
        console.error("Ocurrió un error al mostrar los peliculaes:", error)
    }
}

// Crear y mostrar una pelicula individual
function crearMostrar(pelicula) {
    const tituloPelicula = document.createElement("p")
    tituloPelicula.textContent = pelicula.tituloPelicula
    tituloPelicula.classList = "mostrarDato"

    const posterPelicula = document.createElement("img")
    posterPelicula.src = pelicula.posterUrl
    posterPelicula.classList.add("mostrarDato", "img")

    const generosPelicula = document.createElement("p")
    generosPelicula.textContent = pelicula.generos
    generosPelicula.classList = "mostrarDato"

    const anioPelicula = document.createElement("p")
    anioPelicula.textContent = pelicula.anio
    anioPelicula.classList = "mostrarDato"

    const divContenedor = document.createElement("div")
    divContenedor.classList = "pelicula"

    divContenedor.appendChild(tituloPelicula)
    divContenedor.appendChild(posterPelicula)
    divContenedor.appendChild(generosPelicula)
    divContenedor.appendChild(anioPelicula)


    contenedorPeliculas.prepend(divContenedor)
}

export{ mostrarPeliculas}