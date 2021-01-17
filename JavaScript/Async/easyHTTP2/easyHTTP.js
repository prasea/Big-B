class easyHTTP{
    // Using Callback function to handle Asynchronous code
    // get(url, callback){
    //     fetch(url,{
    //         method : "GET", 
    //         headers : { "Content-type" : "application/json"}
    //     })
    //     .then(response => response.text())
    //     .then(data => callback(data))
    //     .catch(err => console.log(err));
    // }
    get(url){
        return new Promise((resolve, reject) =>        
            fetch(url,{
                method : "GET", 
                headers : { "Content-type" : "application/json"}
            })
            .then(response => {
                if(response.status === 200){
                    return response.json();
                } else{
                    return `Error ${response.status}`;
                }
            })
            .then(data => resolve(data))
            .catch(err => reject(new Error(err)))
        );
    }
    post(url, user){
        return new Promise((resolve, reject) => {

            fetch(url, {
                method : "POST", 
                headers : { "Content-type" : "application/json"},
                body : JSON.stringify(user)
            })
            .then(response => {
                if(response.status === 201){ //HTTP code 201 means resource created
                    return response.json();
                } else{
                    return `Error ${response.status}`;
                }
            })
            .then(data => resolve(data))
            .catch(err => reject(new Error(err)))
        });
    }
    put(url, newUser){
        return new Promise((resolve, reject) => {
            fetch(url, {
                method : "PUT",
                headers : {"Content-type" : "application/json"},
                body : JSON.stringify(newUser)
            })
            .then(response => {
                if(response.status === 200){
                    return response.json();
                } else{
                    return `Error ${response.status}`;
                }
            })
            .then( data => resolve(data))
            .catch( err => reject(new Error(err)))
        })
    }
    delete(url){
        return new Promise((resolve, reject) => {
            fetch(url, {
                method : "DELETE",
                header : {"Content-type" : "application/json"},                
            })
            .then(response => {
                if(response.status === 200){
                    return response.json();
                } else{
                    return `Error ${response.status}`;
                }
            })
            .then( data => resolve(data))
            .catch( err => reject(new Error(err)))
        })
    }
}