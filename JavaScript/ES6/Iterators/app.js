function namesIterator(namesArr){
    let nextIndex = 0;
    return{
        next : function(){
            return nextIndex < namesArr.length ?
            {value : namesArr[nextIndex++], done : false} : 
            {done : true}
        }
    }
}

const names = namesIterator(['Jack', 'Jill']);
console.log(names.next().value)

function* sayNames(){
    yield 'Jack';
    yield 'Jill';
}
console.log(sayNames().next().value)

function* generateID(){
    let id=0;
    while(1){
        yield ++id;
    }
}

const person = {
    name : 'sachin',
    age: 21,
    greet : function(){
        return 'Hello';
    }
}
// const name = person.name;
// const age = person.age;
// const greet = person.greet();

const {name, age, greet} = person;
console.log(name)