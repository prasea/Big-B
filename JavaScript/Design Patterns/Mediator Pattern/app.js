const User = function(name)
{
    this.name = name;
    this.chatroom = null;
}
User.prototype = {
    send: function(message, to){
        this.chatroom.send(message, this, to);
    },
    receive : function(message, from){
        console.log(`${from.name} to ${this.name}: ${message}`);
    }
}
const Chatroom = function(){
    let users = {};
    return{
        register : function(user){
            users[user.name] = user;
            console.log(users);
            user.chatroom = this;//Initially when user was created his chatroom was null, now we changed it to current chatroom after s/he registers.  
        },
        send : function(message, from, to){
            if(to){
                //Message to single user
                to.receive(message,from);
            } else{
                //Broadcast message on chatroom
                for(key in users){
                    if(users[key] !== from){
                        users[key].receive(message,from);
                    }
                }
            }
        }
    }
}
const brad = new User('Brad'); //brad is Object containing name & chatroom as key.
const sara = new User('Sara');
const jeff = new User('Jeff');

const chatroom = new Chatroom();
chatroom.register(brad);
chatroom.register(sara);
chatroom.register(jeff);

brad.send('hello')