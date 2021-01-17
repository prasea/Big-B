/*
    You can't have more than one instance with this pattern.
*/

const Singleton = (function(){
    let instance;
    const createInstance = function(){
        const object = new Object({name: 'PKS'});
        return object;
    }
    return{
        getInstance : function(){
            if(!instance){
                instance = createInstance();
            }
            return instance;
        }
    }
})();

const instanceA = Singleton.getInstance();
const instanceB = Singleton.getInstance();
console.log(instanceB);
console.log(instanceA);
console.log(instanceA === instanceB);
console.log({name:'PKS'} === {name:'PKS'});