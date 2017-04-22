var assert = require('assert');
describe('weather', function () {
    it('should recieve the weather object', function (done) {
        var Weather = require('../');
        var weather = new Weather();
        weather.on('weather', () => {
            try {
                assert.notEqual(weather.getWeather(), null);
                done();
            } catch (err) {
                done(err);
            }
        });
    })
});
