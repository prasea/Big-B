/*
(function(){
    //Declare PRIVATE variable & functions
    return{
        //Declare PUBLIC variable & functions.
    }
})();
*/

const UICtrl = (function(){
    const text = 'Hello World';
    const changeText = function(){
        document.querySelector('h1').textContent = text;
    }
    return{
        callChangeText : function(){
            changeText();
            console.log(text);
        }
    }
})();
UICtrl.callChangeText();
// UICtrl.changeText(); //TypeError: UICtrl.changeText is not a function
