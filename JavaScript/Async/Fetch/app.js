document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJson);
document.getElementById('button3').addEventListener('click', getExternal);

function getText(e){
    let promise = fetch('dataa.txt');
    promise.then(function(response){
        if(response.status === 200){
            return response.text();
        } else{
            return `Error ${response.status} : ${response.statusText}. ${response.url}`
        }
    }).then(function(data){
        document.getElementById('output').innerHTML = `<h1>${data}</h1>`;
    })
    e.preventDefault();
}
function getJson(){
    fetch('data.json')
    .then(function(res){
        return res.json();
        // console.log(res.json()) //Promise
    })
    .then(function(data){
        let output = '';
        data.forEach(function(post){
            output += `<h1>${post.title}</h1><p>${post.body}</p>`;
        })
        document.getElementById('output').innerHTML = output;
    })
}
function getExternal(){
    fetch('https://api.github.com/users')
    .then(function(res){
        return res.json();
    })
    .then(function(users){
        let output = '';
        users.forEach(function(user){
            output += `<li><a href="${user.url}>${user.login}</a></li>`;
        })
        document.getElementById('output').innerHTML = output;
    }, function(err){
        console.log(err);
    })
}

// Promise chaining. If you use return  statement in Promise handler i.e. .then(), you'll get another Promise as response which you need to handle using .then()
/*
    let promise = new Promise((resolve,reject)=>{
        resolve(1);
    })
    promise.then(result=>{
        console.log(result);
        return result * 2;
    }).then(result=>{
        console.log(result);
        return result*2;
    }).then(result=>{
        console.log(result);
        return result*2
    }).then( resust=>{
        console.log(result);
        // If you return result*2 from here, you need Promise handler as it return Promise
    })
*/