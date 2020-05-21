
//con options evitamos el tener que escribir algun comando previo.
const argv = require('yargs')
    .options({
        direccion: {
            alias: 'd',
            desc: 'Ciudad a obtener su clima'
        }
    })
    .help()
    .argv

module.exports = argv