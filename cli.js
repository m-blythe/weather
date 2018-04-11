var user = require('./user.js');
var admin = require('./admin.js');
var help = `Enter a command. Here are your options:
    - [admin|user] [name] [option1: locatation] //looks up weather
    - create user [name] //creates user
    - exit //exits the program`;

function takeInputs(){
    console.log('WELCOME TO Weather CLI!');
    console.log(help);
    var stdin = process.openStdin();
    stdin.addListener('data', function(input) {
        var entered = input.toString().trim();
        if(entered === 'exit')    process.exit();
        if(entered === 'help')    console.log(help);
        else {
            var args = entered.split(' ');
            issueCommand(args);
        }
    });
}
takeInputs();

function issueCommand(args){
    console.log(args[0]);
    if(args[0] !== 'user' && args[0] !== 'admin'){
        console.log('Invalid command');
        console.log(help);
        return;
    }
    responseArray = commands[args[0]];
    responseArray.call(this, args[1], args[2]);
}

var commands = {
    user: function(name, location){
        user.User(name, location);
    },
    admin: function(name, location){
        admin.Admin(name,location);
    }
};



/*function issueCommand(args, msg){
    //convert lower-case-and-dashes to camelCasing
    args[0] = args[0].replace(/(-.)/g, function(match){
        return match[1].toUpperCase()
    });
    responseArray = commands[args[0]];
    if(typeof responseArray !== 'function'){
        console.log(`That's not a valid command. Here are your options:
            - my-tweets //shows last 20 tweets
            - movie-this "Movie you want to search for" //gets information about movie
            - spotify-this-song "Song you want to search for" //gets information about the song
            - do-what-it-says //runs a list of commands based on chores.txt
            `);
        return;
    }
    if(args.length > 1) responseArray.call(this, args[1], msg);
    else responseArray.call(this, msg);

}*/


//module.exports = User;