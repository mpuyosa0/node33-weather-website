const request = require('request')
  
const forecast = (latitude, longitude, callback) => {
         //const url = 'http://api.weatherstack.com/current?access_key=b8976c37e38b55f1378b35cdfec24732&query=' + latitude + ',' + longitude + '&units=f'
         //const url = 'http://api.weatherstack.com/current?access_key=520480a900b9c9c052ee7ca0cecc8a54&query=' + latitude + ',' + longitude + '&units=f'
           const url = 'http://api.weatherstack.com/current?access_key=d13eb8ea248ad21e4e86dd308691494c&query=' + latitude + ',' + longitude + '&units=f'
        
 
    request({ url, json: true  },  (error, { body } = {})  => {
    if (error) {
        callback('Unable to connect to weather service', undefined)
    } else if (body.error) {
        callback('Unable to find the location in forecast', undefined)
    } else {
        callback(undefined, body.current.humidity + ': Is  humidity,  ' + body.current.temperature + ':  The temperasture:.      ' + body.current.temperature + ':  precip  % chance of rain.')
   
    }
})
}

module.exports = forecast

