# node-fwe-client
This client is an interface to [my FWE](http://dollopos.ga/weather).

## Example
An example that logs the weather object to STDOUT.
```
var Weather = require('weather');
var fwe = new Weather();

fwe.on('weather',function(weather){
    console.log(weather);
})
```