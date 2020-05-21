const axios = require('axios')

const obtenerClimaDeLaCiudad = async (lat, lon) => {
    const apiID = 'b825a11c82c258590d3170e49011812c'
    try {
        const { data: { main: { temp } } } = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiID}&units=metric`)
        return temp
    } catch (error) {
        return error
    }
}

module.exports = {
    obtenerClimaDeLaCiudad
}