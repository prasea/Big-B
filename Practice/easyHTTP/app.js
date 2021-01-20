let http = new easyHTTP();
// http.get('https://jsonplaceholder.typicode.com/posts/1', function(err, posts){
//     if(err){
//         console.log(err);
//     } else{
//         console.log(posts)
//     }
// });

const post = {
    title : 'Custom post',
    body : 'custom body'
}

// http.post('https://jsonplaceholder.typicode.com/posts', post, function(err, post){
//     if(err){
//         console.log(err);
//     } else{
//         console.log(post)
//     }
// })
// http.put('https://jsonplaceholder.typicode.com/posts/1', post, function(err, post){
//     if(err){
//         console.log(err);
//     } else{
//         console.log(post)
//     }
// })
http.delete('https://jsonplaceholder.typicode.com/posts/100',  function(err, post){
    if(err){
        console.log(err);
    } else{
        console.log(post)
    }
})
