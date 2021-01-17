const posts = [
    {title : "post 1", body : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa repellat ut aspernatur cumque ad laudantium dolor accusantium incidunt vero autem."},
    {title : "post 2", body : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa repellat ut aspernatur cumque ad laudantium dolor accusantium incidunt vero autem."},
]
function getPosts(){
    setTimeout(function(){
        let output = '';
        posts.forEach(function(post){
            output += `<h1>${post.title}</h1> <h3>${post.body}</h3>`
        });
        document.body.innerHTML = output;
    },1000)
}
function createPost(post){
    let promise =  new Promise(function(resolve, reject){
        setTimeout(function(){
            posts.push(post);
            const error = true;
            if(!error){
                resolve();
            } else{
                // reject("Error : Something went wrong")
                reject(new Error("Something went wrong"));
            }
            // reject(new Error("Couldn't fetch from server "))
        },2000);
    });
    return promise;    
}
let op = createPost({title:"Post 3", body : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa repellat ut aspernatur cumque ad laudantium dolor accusantium incidunt vero autem."});
op.then(getPosts, function(err){
    console.log(err);
})
// getPosts();

