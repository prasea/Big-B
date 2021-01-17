// function greet(){
//     return Promise.resolve('Hello');
// }
// async function greet(){
//     return 'Hello';
// }

// greet().then( res => console.log(res));


// async function greet(){
//     const promise = new Promise((resolve,reject) => {
//         setTimeout(() => resolve("Hello"), 1000)
//     })
//     // promise.then((result)=> console.log(result) )
//     // It’s just a more elegant syntax of getting the promise result than promise.then(commented above), easier to read and write.
//     const result = await promise;
//     console.log(result);
// }

// greet();

// Asynchronous with Callback
function getUsersCallback(callback){
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(result => callback(result))
}
// getUsersCallback(users => console.log(users));

// Asynchronous using Promises
function getUsersPromises(){
    return new Promise((resolve, reject) =>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(result => resolve(result))
    })
}
// getUsersPromises().then(users => console.log(users))

// Asynchronous using Async/await
async function getUsersAsync(){
    return fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json())     
}
getUsersAsync().then(users => console.log(users))

async function getUsersAsyncAwait(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const result = await response.json();
    return result;
}
// getUsersAsyncAwait().then( users => console.log(users));
