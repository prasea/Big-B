/*
    version 3.0
    Using async/await with fetch API
*/
// get(url){
//     return new Promise((resolve,reject)=>{
//         fetch(url)
//             .then(res => res.json())
//             .then(data => resolve(data))
//             .catch(()=> reject('Could not GET post'))                
//     })
// }
class easyHTTP{
    async get(url){
        const response = await fetch(url);
         const response2 = await response.json();
         return response2;
    }
    async post(url,data){
        const HTTPresponse = await fetch(url,{
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(data)
        });
        const JSONresponse = await HTTPresponse.json();
        return JSONresponse;
    }
    async put(url,data){
        const HTTPresponse = await fetch(url,{
            method : 'PUT',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(data)
        });
        const JSONresponse = await HTTPresponse.json();
        return JSONresponse;
    }
    async delete(url){
        const HTTPresponse = await fetch(url,{
            method : 'DELETE'
        });
        const JSONresponse = await Promise.resolve('Post DELETED');
        return JSONresponse;
    }

    
}