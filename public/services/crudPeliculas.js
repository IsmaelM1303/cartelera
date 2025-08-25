//Esta es la función que lee las películas
async function getMovie() {
    try {
        const response = await fetch('http://localhost:3001/peliculas', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const peliculas = await response.json()
        return peliculas

    } catch (error) {
        console.log("Ocurrió un error al obtener las peliculas" + error)
    }
}

//Esta es la función que crea los usuarios
async function createMovie(nuevaPelicula) {
    try {
        const response = await fetch('http://localhost:3001/peliculas', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(nuevaPelicula)
        })

        const peliculas = await response.json()
        return peliculas

    } catch (error) {
        console.log("Ocurrió un error al crear las peliculas" + error)
    }
}

export {getMovie, createMovie}