const request = require('postman-request')

const geoCode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoicmlzaGktZCIsImEiOiJjbGU0NXl3YTkwYjR1M29wZzQ0enJrcWpnIn0.ZnBA_FJXPDOb_Zg9U0Xctg&limit=1`
    request({url, json : true}, (error , response) => {
        if(error) {
            callback(`Unable to connect to geoLocation service` , undefined)
        } else if (response.body.features.length === 0) {
            callback(`Unable to find location. Try another location`,undefined)
        } else {
            callback(undefined , {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            })
        }
    })
}


module.exports = geoCode