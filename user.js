var fs = require('fs');
var cli = require('./cli.js');
var weather = require("./weather.js");


function User(name, location) {

    this.name = name;
    this.location = location;
    this.date = Date.now();
    this.getWeather = function() {

        weather.find({search: this.location, 
        degreeType: "F"}, function(err, result)
    {
        if (err) console.log(err);

        console.log(JSON.stringify(result, null,2));
    });

    };



};

module.exports = User;