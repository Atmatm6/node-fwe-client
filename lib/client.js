var socketio = require('socket.io-client');
var inherits = require('util').inherits;
var EventEmitter = require('events').EventEmitter;

function WeatherClient() {
    if (!(this instanceof Weather)) return new Weather();
    this.socket = socketio('http://dollopos.ga:3001');
    this.socket.on('connect', () => {
        this.emit('started');
    });
    this.socket.on('weather', (weather) => {
        this.rawWeather = weather;
        this.emit('rawWeather', weather);
        var weather2 = {
            time: weather.time,
            date: weather.date,
            weather: weather.weather
        }
        this.weather = weather2;
        this.emit('weather', weather2)
    });
    EventEmitter.call(this);
}

inherits(WeatherClient, EventEmitter);

WeatherClient.prototype.getWeather = function () {
    if (this.weather != undefined) return this.weather;
    else return null;
}

module.exports = WeatherClient;
