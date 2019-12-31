const getTiempo = require('./get-tiempo');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true,
    }
}).argv;

getTiempo.getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);