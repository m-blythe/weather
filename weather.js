var weather = require('weather-js');
//var user = require('./user.js');

//var UserSearch = function(/*name,*/location) {
    //this.name = name;
    //this.location = location;
    //this.Date.now();
    //this.getWeather = function(){



//};

//}

//var newSearch = new UserSearch("Houston");
//newSearch.
module.export = {
    runme: function(location){
        weather.find({search: location, degreeType: 'F'}, function(err, result) {
            if(err) console.log(err);

            console.log(JSON.stringify(result, null, 2));
        });
    }
};