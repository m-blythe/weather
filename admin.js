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
    

    //newusersearch accept a name and location 
    //getdata log or return list of all searches user have executed thus far 
    //
}