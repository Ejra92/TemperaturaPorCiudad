const argv = require('./config/yargs')

const { obtenerCoordenadasCiudad } = require('./coordenadas')

if (argv.d) obtenerCoordenadasCiudad(argv.d)
    .then(console.log)
    .catch(console.log)