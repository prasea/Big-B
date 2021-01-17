/*
    Revealing module patterns reveal the Private variables & funtions using Object literals.
*/

const ItemCtrl = (function(){
    let data = [];
    const add = function(item){
        data.push(item);
        console.log('Item Added');
    }
    const get = function(idOfSearchedItem){
        // console.log(data);
        let item =  data.find(function(currItem){
            return currItem.id === idOfSearchedItem;
        });
        console.log(item);
    }
    return{
        add : add,
        get : get
    }
})();

ItemCtrl.add({id:1, name:'Mark'});
ItemCtrl.add({id:2, name: 'Elton'});
ItemCtrl.get(2);
