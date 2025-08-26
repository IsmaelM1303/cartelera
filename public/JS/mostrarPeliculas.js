import { getMovie } from "../services/crudPeliculas.js"

const contenedorPeliculas = document.getElementById("contenedorPeliculas")

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

function crearMostrar(pelicula) {
    const tituloPelicula = document.createElement("p")
    tituloPelicula.textContent = pelicula.tituloPelicula
    tituloPelicula.classList.add("mostrarDato")

    const generosPelicula = document.createElement("p")
    generosPelicula.textContent = pelicula.generos
    generosPelicula.classList.add("mostrarDato")

    const anioPelicula = document.createElement("p")
    anioPelicula.textContent = pelicula.anio
    anioPelicula.classList.add("mostrarDato")

    const divInformacion = document.createElement("div")
    divInformacion.classList.add("informacion")
    divInformacion.appendChild(tituloPelicula)
    divInformacion.appendChild(generosPelicula)
    divInformacion.appendChild(anioPelicula)

    const posterPelicula = document.createElement("img")
    posterPelicula.src = pelicula.posterUrl
    posterPelicula.classList.add("img")

    const divTarjeta = document.createElement("div")
    divTarjeta.classList.add("pelicula")
    divTarjeta.appendChild(posterPelicula)
    divTarjeta.appendChild(divInformacion)

    contenedorPeliculas.appendChild(divTarjeta)

    const totalTarjetas = contenedorPeliculas.children.length
    const columnas = Math.floor(contenedorPeliculas.offsetWidth / 150)
    if (totalTarjetas % columnas === 0) {
        divTarjeta.classList.add("fin-de-fila")
    }
}

export { mostrarPeliculas }
