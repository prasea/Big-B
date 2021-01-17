const posts = [
    {title: "Post 1", body: "This is post one."},
    {title: "Post 2", body: "This is post two."}
];

function getPosts(){
    setTimeout(function(){
        let output = '';
        posts.forEach(function(post){
            output += `
            <h1>${post.title}</h1>
            <p>${post.body}</p>
            `;
        })
        document.body.innerHTML = output;
    },1000);
}
function createPost(post, callback){
    setTimeout(function(){
        posts.push(post);
        callback();
    }, 2000)
}
createPost({title: "Post 3", body: "This is post three. After 2 second, new post is created and pushed into server. Also callback is called after 2 second simulataneously. But again the callback is getPosts which has timeout of 1 second. So posts will be displayed after 2+1=3 seconds."}, getPosts);

// function loadScript(src){
//     let script = document.createElement('script');
//     script.src = src;
//     document.head.append(script);
// }
// loadScript("script.js")
// greet(); //ReferenceError: greet is not defined at app.js:32

/*
Naturally, the browser probably didn’t have time to load the script. As of now, the loadScript function doesn’t provide a way to track the load completion. The script loads and eventually runs, that’s all. But we’d like to know when it happens, to use new functions and variables from that script.


Let’s add a callback function as a second argument to loadScript that should execute when the script loads:
*/


function loadScript(src, callback){
    let script = document.createElement('script');
    script.src = src;
    script.onload = () => callback(null, script);
    script.onerror = () => callback(new Error(`Script load error for ${src}`));
    document.head.append(script);
}

// Now if we want to call greet() functions from the script, we should write that in the callback:
// loadScript("script.js", function(error, script){
//     if(error === null){
//         console.log(`Cool, the script ${script.src} is loaded`)
//         greet();
//     } else{
//         console.log(error);
//     }
// })

// Callback in callback
loadScript("script.js", function(error, script){
    if(error === null){
        console.log(`Cool, the script ${script.src} is loaded`)
        greet();
        loadScript("script23.js", function(error, script){
            if(error === null){
                console.log(`Cool, the script ${script.src} is loaded`)
                giveCart();
            } else{
                console.log(error);
            }
        });
    } else{
        console.log(error);
    }
});
// That’s the idea: the second argument is a function (usually anonymous) that runs when the action is completed.