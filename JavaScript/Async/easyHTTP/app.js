let http = new easyHTTP();
// HTTP GET request for all posts
// http.get("https://jsonplaceholder.typicode.com/posts", function(posts){
//     console.log(posts);
// })

//HTTP GET request for Single Post
// http.get("https://jsonplaceholder.typicode.com/posts/3", function(err,post){
//     if(err === null){
//         console.log(post);
//     } else{
//         console.log(err);
//     }
// });

const data = {
    title : "Untitled",
    body : "This is body"
}
// HTTP POST request
// http.post("https://jsonplaceholder.typicode.com/posts", data, function(post){
//     console.log(post);
// })

// http.put("https://jsonplaceholder.typicode.com/posts/3", data, function(err, post){
//     if(err === null){
//         console.log(post);
//     } else{
//         console.log(err);
//     }
// })

http.delete("https://jsonplaceholder.typicode.com/posts/3", function(err, response){
    if(err === null){
        console.log(response);
    } else{
        console.group(err);
    }
})