<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Documentation](#documentation)
  - [class WeatherClient()](#class-weatherclient)
    - [Events](#events)
      - [opened](#opened)
      - [weather](#weather)
      - [rawWeather](#rawweather)
    - [getWeather()](#getweather)
  - [The Weather Object](#the-weather-object)
    - [time](#time)
      - [time.hour](#timehour)
      - [time.minute](#timeminute)
    - [date](#date)
      - [date.day](#dateday)
      - [date.dayofweek](#datedayofweek)
      - [date.week](#dateweek)
      - [date.month](#datemonth)
      - [date.dayofmonth](#datedayofmonth)
    - [weather](#weather-1)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Documentation
### class WeatherClient()
This class inherits the Node.js [EventEmitter](https://nodejs.org/api/events.html#events_class_eventemitter)
#### Events
##### opened
An event for when the client connects to the FWE.
##### weather
This event emits a slim version of the weather object you can find in the dev tools console on the [FWE](http://dollopos.ga/weather)
you can find this exact same object with the event:
##### rawWeather
The original version of the weather object on the [FWE](http://dollopos.ga/weather), 
it contains my extra arrays with names of months/weather/etc.
#### getWeather()
Returns the weather object if you want to get it whenever you need it. 
Although you can to that, it's recommended you use the weather event to get the object.
### The Weather Object
#### time
##### time.hour
Everytime the clock ticks 60, the hour changes and the minutes reset itself.
##### time.minute
Moves by five fake minutes per five real seconds.
#### date
##### date.day
What should be a large number, mesuring the total amount of days that has been recorded.
##### date.dayofweek
Self Explanatory, it's the day of the week.
##### date.week
There are only four weeks in a fake month, so account for that.
##### date.month
##### date.dayofmonth
As self explanatory as date.dayofweek, it's the day of the month.
#### weather
The integer specifying the current weather state.
The states are: 0-sunny 1-cloudy 2-rainy 3-stormy 4-snowy