// function myFunc(){
//     return new Promise((resolve ,reject)=>{
//         resolve('Hello world')
//     })
    
// }
// async function myFunc(){
//     return 'Hello World'
    
// }

async function getPosts(url){
    const response = await fetch(url);
    const data = await response.json();
    return data;    
}

getPosts('https://jsonplaceholder.typicode.com/posts/1')
    .then(posts => console.log(posts))
    .catch(err => console.log(err))