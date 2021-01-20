function easyHTTP(){
    this.http = new XMLHttpRequest();
}

easyHTTP.prototype.get = function(url, callback){
    this.http.open('GET', url, true);    
    let self = this;
    this.http.onload = function(){
        if(self.http.status === 200){
            callback(null,self.http.responseText);
        } else{
            callback(new Error(self.http.status));
        }
    }    
    this.http.send();
}
easyHTTP.prototype.post = function(url,data,callback){
    this.http.open('POST', url, true);
    this.http.setRequestHeader('Content-Type', 'application/json');
    let self = this;
    this.http.onload = function(){        
        callback(null, self.http.responseText);
        console.log(self.http.status)
        // callback(new Error(self.http.status));
        
    }
    this.http.send(JSON.stringify(data));    
}

easyHTTP.prototype.put = function(url, data, callback){
    this.http.open('PUT', url, true);
    this.http.setRequestHeader('Content-Type', 'application/json');
    let self = this;
    this.http.onload = function(){
        callback(null, self.http.responseText);
        console.log(self.http.status);
    }
    this.http.send(JSON.stringify(data));
}
easyHTTP.prototype.delete = function(url, callback){
    this.http.open('DELETE', url, true);
    let self = this;
    const arr = url.split('/');
    const postId = arr[arr.length-1];
    // const postId = url.charAt(url.length - 1);    
    this.http.onload = function(){
        callback(null,  `Post with id ${postId} deleted`);        
        console.log(self.http.status);
    }
    this.http.send();
}