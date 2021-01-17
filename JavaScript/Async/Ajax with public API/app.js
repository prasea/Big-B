document.getElementById('get-jokes').addEventListener('click', getJokes);
setInterval(clockGenerator, 1000)
function clockGenerator(){
    const date = new Date();
    document.getElementById('time').innerHTML = `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`
}
function getJokes(e){
    const number  = document.getElementById("number").value;
    const xhr = new XMLHttpRequest();
    xhr.open("GET", `http://api.icndb.com/jokes/random/${number}`, true);
    xhr.onload = function(){
        if(this.status === 200){
            const response = JSON.parse(xhr.responseText);
            let output = '';
            if(response.type === "success"){
                response.value.forEach(function(val){
                    output+= `
                        <li>ID : ${val.id}</li>
                        <li>Joke : ${val.joke}</li>
                    `;
                });
            } else{
                output = `<li> Couldn't fetch jokes</li>`;
            }
            document.querySelector('.jokesHere').innerHTML = output;
        }
    }
    xhr.send();
    e.preventDefault();
}