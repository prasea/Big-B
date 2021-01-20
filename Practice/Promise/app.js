// Callback Variation of loadScript()
/*
function loadScript(src,callback){
    let script = document.createElement('script');
    script.src = src;
    document.head.append(script);    
    script.onload = function(){
        callback(script);
    }
}
loadScript('script1.js', function(script){
    alert(`Script ${script.src} loaded`);
    greet();
})
*/

//Promise Variation of loadScript

/
function loadScript(src){
    return new Promise(function(resolve, reject){
        const script = document.createElement('script');
        script.src = src;
        script.onload = function(){
            resolve(script);
        }
        script.onerror = function(){
            reject(new Error('Script Error'));
        }
        document.head.append(script);
    })
}

let promise = loadScript('script1.js');
promise.then(function(script){
    alert(`Script ${script.src} loaded`);
    greet();
})
.catch(function(error){
    alert(error);
})
