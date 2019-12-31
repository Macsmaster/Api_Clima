const axios = require('axios');


const getLugarLatLng = async (dir) => {
    const encodeUrl = encodeURI(dir);
   
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,

        headers: { 'X-RapidAPI-Key': 'd260d57544msh2a145f0828d00ccp1227f3jsn4b3a6ab14dc4' }
    });



    const resp = await instance.get()
        
    if ( resp.data.Results.length === 0){
            throw new Error(`No hay resultados para ${dir}`);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lon = data.lon;
    
    
   
        return{
            direccion,
            lat,
            lon,

        }

}


module.exports = {
    getLugarLatLng,
}