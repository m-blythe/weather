var weather = require('weather-js');
 
// Options: 
// search:     location name or zipcode 
// degreeType: F or C 
 




// user's name and location as arguments, and store the value of Date.now() in a date property. 
// (This will be formatted later.)
// Constructor function for creating Movie objects
var UserSearch = function(name,location) {
    // this.cast will hold all of our CastMember objects
    this.name = name;
    this.location =location;
    this.Date.now();
    this.getWeather = function(){

    weather.find({search: this.location, degreeType: 'F'}, function(err, result) {
        if(err) console.log(err);
       
        console.log(JSON.stringify(result, null, 2));
    });
};

}
module.exports = UserSearch;

