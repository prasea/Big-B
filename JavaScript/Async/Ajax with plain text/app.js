document.getElementById('button').addEventListener('click', loadData);

function loadData(e){
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'data.txt', true);

    xhr.onprogress = function(){
        if(this.readyState === 3){
            console.log('Loading datas');
        }
    }

    xhr.onload = function(){
        if(this.status === 200){
            document.getElementById('output').textContent = this.responseText;
        }
    }

    // xhr.onreadystatechange = function(){        
    //     if(this.status === 200 && this.readyState===4){
    //         document.getElementById('output').textContent = this.responseText;
    //     }
    // }
    
    xhr.onerror = function(){
        console.log(this.readyState);
    }
 
    xhr.send();

    e.preventDefault();
}