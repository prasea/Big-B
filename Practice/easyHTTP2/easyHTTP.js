class easyHTTP{
    // get(url, callback){
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(posts => callback(posts));
    // }
    handleErrors(response) {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response;
    }
    get(url){
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(res => res.json())
                .then(post => resolve(post))
                .catch(() => reject(new Error('Could no GET post')))
        })
    }
    post(url, post){
        return new Promise((resolve,reject) => {
            fetch(url, {
                method : 'POST',
                headers : {
                    'Content-Type' : 'application/json'
                },
                body : JSON.stringify(post)
            })
                .then(res => res.json())
                .then(post => resolve(post))
                .catch(() => reject(new Error('Could not POST new Post')));
        })
    }
    put(url, post){
        return new Promise((resolve,reject) => {
            fetch(url, {
                method : 'PUT',
                headers : {
                    'Content-Type' : 'application/json'
                },
                body : JSON.stringify(post)
            })
                .then(res => res.json())
                .then(post => resolve(post))
                .catch(() => reject(new Error('Could not UPDATE Post')))
        })
    }
    delete(url, post){
        return new Promise((resolve,reject) => {
            fetch(url, {
                method : 'DELETE',
                headers : {
                    'Content-Type' : 'application/json'
                },
                body : JSON.stringify(post)
            })
                .then(res => res.json())
                .then(post => resolve('Deleted'))
                .catch(() => reject(new Error('Could not DELETE Post')))
        })
    }
}