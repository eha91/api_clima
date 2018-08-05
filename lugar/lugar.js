const axios = require('axios');

const getLugar = async(direccion) => {

    let encodeUrl = encodeURI(direccion+',MX')

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeUrl}&key=AIzaSyA-HXVa2jtkGfKtIJwisxgC46RaWqC1xuI`);

    if(resp.data.status === 'ZERO_RESULTS') {
        throw new Error('No hay resultados para la ciudad');
    }

    let location = resp.data.results[0];
    let coors = location.geometry.location;

    return {
        direccion: location.formatted_address,
        lng: coors.lng,
        lat: coors.lat
    }
}

module.exports = {
    getLugar
}






