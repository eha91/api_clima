const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias:'d',
        desc: 'Direccion de la cuidad para obtener clima',
        demand:true
    }
}).argv;

let getInfo = async(direccion) => {
    try {
        let coors = await lugar.getLugar(direccion);
        let temp = await clima.getClima(coors.lat,coors.lng);

        return `El Clima es de ${temp}`;
    }
    catch (e) {
        return `No se puedo determinar el clima`;
    }
}

getInfo(argv.direccion).then((resp) => {
    console.log(resp);
})
