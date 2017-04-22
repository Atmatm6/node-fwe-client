# node-fwe-client 
[![Build Status](https://travis-ci.org/Atmatm6/node-fwe-client.svg?branch=master)](https://travis-ci.org/Atmatm6/node-fwe-client)
[![NPM](https://nodei.co/npm/fakeweatherclient.png)](https://nodei.co/npm/fakeweatherclient/)
This client is an interface to [my FWE](http://dollopos.ga/weather).

## Example
An example that logs the weather object to the console.
```
var WeatherClient = require('weather');
var fwe = new WeatherClient();

fwe.on('weather',function(weather){
    console.log(weather);
})
```

[Documentation](https://github.com/Atmatm6/node-fwe-client/blob/master/DOCS.md)