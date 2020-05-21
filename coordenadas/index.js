const axios = require('axios')
const { obtenerClimaDeLaCiudad } = require('../tiempo')

const axiosCity = axios.create({
    headers: { 'x-rapidapi-key': 'eb71c1fcbemsh0f6990b27d2602dp14a8f6jsna5dcedce22b2' }
})

const obtenerCoordenadasCiudad = async (data) => {
    const ubicacion = encodeURI(data)
    try {
        const { data: { Results } } = await axiosCity.get(`https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ubicacion}`)

        if (Results.length <= 0) throw new Error('No se encontraron coincidencias.')

        const { lat, lon: lng } = Results[0]

        const temp = await obtenerClimaDeLaCiudad(lat, lng)

        return `La temperatura en ${data} es de ${temp} ºC`
    } catch (error) {
        return error
    }
}



module.exports = {
    obtenerCoordenadasCiudad
}