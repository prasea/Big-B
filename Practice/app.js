// document.getElementById('button1').addEventListener('click', loadCustomer);
// function loadCustomer(){
//     const xhr = new XMLHttpRequest();
//     xhr.open('GET', 'customer.json', true);
//     xhr.onload = function(){
//         if(this.status === 200){
//             const customer = JSON.parse(this.responseText); //parse JSON string to JS Object
//             let output;
//             output = `
//                 <li>${customer.id}</li>
//                 <li>${customer.name}</li>
//                 <li>${customer.email}</li>
//                 <li>${customer.address}</li>
//             `;
//             document.getElementById('customer').innerHTML = output;
//         }
//     }
//     xhr.send();
// }

// document.getElementById('button2').addEventListener('click', loadCustomers);
// function loadCustomers(){
//     const xhr = new XMLHttpRequest();
//     xhr.open('GET', 'customers.json',true);
//     xhr.onload = function(){
//         if(this.status=== 200){
//             const customers = JSON.parse(this.responseText);            
//             let output = '';
//             customers.forEach(function(customer){
//                 output += `
//                     <li>${customer.id}</li>
//                     <li>${customer.name}</li>
//                     <li>${customer.email}</li>
//                     <li>${customer.address}</li>
//                     <br>
//                 `;
//             });
//             document.getElementById('customers').innerHTML = output;

//         }
//     }
//     xhr.send();
// }


//Get Data from External API
/*
document.getElementById('get-jokes').addEventListener('click', getJokes);

function getJokes(e){
    const number = document.getElementById('number').value;
    const xhr = new XMLHttpRequest();
    xhr.open('GET',`http://api.icndb.com/jokes/random/${number}`,true);
    xhr.onload = function(){
        if(this.status===200){
            //JSON.parse() converts JSON string to JS Object
            const response = JSON.parse(this.responseText);
            if(response.type === 'success'){
                let output = '';
                response.value.forEach(function(curr){
                    output += `<li>${curr.joke}</li>`;
                });
                document.querySelector('.jokes').innerHTML = output;
            }
        }
    }
    xhr.send();
    e.preventDefault();
}
*/

//Callback
/*
const posts = [
    {title: "One", body : "Post number one"},
    {title: "Two", body : "Post number two"}
]

function getPosts(){
    setTimeout(()=>{
        let output = '';
        posts.forEach((post) => {
            output += `
                <h1>${post.title}</h1>
                <p>${post.body}</p>
            `;
        });
        document.body.innerHTML = output;
    },1000)
}

function createPosts(post,callback){
    setTimeout(()=>{
        posts.push(post);
        callback();
    },2000)
}


createPosts({title:'Three', body: 'Post number three'}, getPosts);
*/

const posts = [
    {title: "One", body : "This is body of post one"},
    {title: "Two", body : "This is body of post two"}
];

function getPosts(){
	setTimeout(function(){
  	let output = '';
  	posts.forEach(function(post){
    	output += `
      	<h1>${post.title}</h1>
        <p>${post.body}</p>
      `;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPosts(post){
    let promise = new Promise(function(resolve, reject){
        setTimeout(function(){
            posts.push(post);
            resolve();
        },2000)
    });
    return promise;
};
document.body.textContent = 'Loading posts';
createPosts({title: "Three", body : "This is body of post three"})
    .then(getPosts);
