var fs = require('fs');
var user = require('./user.js');
//Admin constructor which will create an admin 
//  
// 

function authorize() {
    //read the admin.txt file for name;
    //authorize IF name is found
    fs.readFile("log.txt", "utf8", function(error, data) {


        if (error) {
            return console.log(error);
        }
    
        console.log(data);
        //if ()
    });
}


function Admin() {
    
    this.newUserSearch = function() {
        //accept a name and location
        //search for weather in area 
        //save user's information in log

        var newUser = new User("bob", "Houston");
        newUser.getWeather();
        fs.writeFile("log.txt", `
User: ${newUser.name}
Location: ${newUser.location}`, function(error, data) {

            if (err) {
                return console.log(err);
            }
            console.log("Log.txt was updated!");
        })

    }
    //newusersearch accept a name and location 
    //getdata log or return list of all searches user have executed thus far 
    //
}