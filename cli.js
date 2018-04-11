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
        new user(name, location);
    },
    admin: function(name, location){
        new admin(name,location);
    }
};