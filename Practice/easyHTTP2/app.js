
let http = new easyHTTP(); 
// http.get('https://jsonplaceholder.typicode.com/posts')
//     .then(posts => console.log(posts))
//     .catch(err => console.log(err));

const post = {
    title : 'Custom title',
    body : 'Custom body'
}
// http.post('https://jsonplaceholder.typicode.com/posts', post)
//     .then(post => console.log(post))
//     .catch(err => console.log(err));

// http.put('https://jsonplaceholder.typicode.com/posts/1', post)
//     .then(post => console.log(post))
//     .catch(err => console.log(err));

http.delete('https://jsonplaceholder.typicode.com/posts/1', post)
    .then(post => console.log(post))
    .catch(err => console.log(err));