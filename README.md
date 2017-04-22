<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [node-fwe-client](#node-fwe-client)
  - [Example](#example)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# node-fwe-client
This client is an interface to [my FWE](http://dollopos.ga/weather).

## Example
An example that logs the weather object to the console.
```
var Weather = require('weather');
var fwe = new Weather();

fwe.on('weather',function(weather){
    console.log(weather);
})
```

