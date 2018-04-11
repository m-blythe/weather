var fs = require('fs');
//var cli = require('./cli.js');
var weather = require('./weather.js');


function User(name, location) {
    this.name = name;
    this.location = location;
    this.date = Date.now();
    this.getWeather = weather.runme(this.location);
    this.logSearch = function(){
        //log the stuff, don't forget the date
    }
};

module.exports = User;