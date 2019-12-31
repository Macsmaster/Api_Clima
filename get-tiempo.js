const lugar = require('./lugar/lugar');
const clima = require('./clima/clima')

/* 
lugar.getLugarLatLng( argv.direccion)
        .then(console.log) */

/* clima.getClima(40.750000,-74.000000) .then (console.log); */

const getInfo = async (direccion) => {
    try {
        const coords = await lugar.getLugarLatLng(direccion)
        const temp = await clima.getClima(coords.lat, coords.lon);
        return `El clima de ${coords.direccion} es de ${temp}.`

    } catch (error) {
        return `No se pudo determinar el clima de ${direccion}`
    }
}

module.exports = {
    getInfo
}