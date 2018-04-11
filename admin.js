var fs = require('fs');
var user = require('./user.js');
//Admin constructor which will create an admin 
//  
// 


function Admin() {
    
    this.newUserSearch = function(name, location) {
        //accept a name and location
        //search for weather in area 
        //save user's information in log

        var newUser = new User(name, location);
        newUser.getWeather();
        var logTxt = `
User: ${newUser.name}
Location: ${newUser.location}`;

        fs.writeFile("log.txt", logTxt, function(error, data) {

            if (err) {
                return console.log(err);
            }
            console.log("Log.txt was updated!");
        })

    }

    this.getData = function() {
        fs.readFile("log.txt", "utft8", function(error, data) {
            console.log(data);
        });
    };
    //newusersearch accept a name and location 
    //getdata log or return list of all searches user have executed thus far 
    //
}

module.exports = Admin;