var assert = require('assert');
describe('weather', function () {
    it('should recieve the weather object', function (done) {
        var WeatherClient = require('../');
        var weather = new WeatherClient();
        weather.on('weather', () => {
            try {
                console.log(weather.getWeather())
                assert.notEqual(weather.getWeather(), null);
                done();
            } catch (err) {
                done(err);
            }
        });
    })
});
