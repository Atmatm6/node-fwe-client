# node-fwe-client
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