const axios = require('axios');

const getClima = async(lat,lng) => {

    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=49da1b79db9561c6c226980baa065e7f`);

    return resp.data.main.temp;

}

module.exports = {
    getClima
}