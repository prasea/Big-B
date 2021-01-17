const http  = new easyHTTP;

// Using callback
// http.get('https://jsonplaceholder.typicode.com/users', function(users){
//     console.log(users);
// });
// const usersPromise = http.get('https://jsonplaceholder.typicode.com/userss');
//     usersPromise
//     .then(users => console.log(users))  
//     .catch(err => console.log(err));

const user = {
    name : "Pratham Prasoon",
    username : "Machine",
    email : "praham@prasoon.internet"    
}
const newUser = {
    name : "Chin Doo",
    username : "Cina",
    email : "china@town.company"
}
// http.post("https://jsonplaceholder.typicode.com/users",user)
//     .then(newUser => console.log(newUser))
//     .catch(err => console.log(err));
// http.put("https://jsonplaceholder.typicode.com/users/4",user)
//     .then(newUser => console.log(newUser))
//     .catch(err => console.log(err));
http.delete("https://jsonplaceholder.typicode.com/users/1")
    .then(response => console.log(response))
    .catch(err => console.log(err));
