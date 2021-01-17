const StorageCtrl = (function(){
    return{
        storeItemInLS : function(newItem){
            let items;
            if(localStorage.getItem('items') === null){
                items = [];
                items.push(newItem);
                localStorage.setItem('items', JSON.stringify(items));
            } else{
                items = JSON.parse(localStorage.getItem('items'));
                items.push(newItem);
                localStorage.setItem('items', JSON.stringify(items));
            }
        },
        getItemFromLS : function(){
            let items;
            if(localStorage.getItem('items') === null){
                items = [];
            } else{
                items = JSON.parse(localStorage.getItem('items'));
            }
            return items;
        },
        updateItemInLS :function(updatedItem){            
            let items = JSON.parse(localStorage.getItem('items'));            
            items.forEach(function(item, index){                            
                if(item.id === updatedItem.id){
                    items.splice(index, 1, updatedItem); //Remove 1 element before index = index & insert updatedItem
                }
            });
            localStorage.setItem('items', JSON.stringify(items));
        },
        deleteFromLS : function(deleteItemID){
            let items = JSON.parse(localStorage.getItem('items'));
            items.forEach(function(item, index){
                if(item.id === deleteItemID){
                    items.splice(index, 1)
                }
            });
            localStorage.setItem('items', JSON.stringify(items));
        },
        clearAllItems : function(){
            localStorage.removeItem('items');
        }
    }
    
})();
const ItemCtrl = (function(){

    //Item Constructor to add new item
    const Item = function(id, name, calories){
        this.id = id;
        this.name = name;
        this.calories = calories;
    }
    const data = {
        items : StorageCtrl.getItemFromLS(),
        currItem : null,
        totalCalories : 0
    }
    return {
        addNewItem :function(name, calories){
            let ID;
            if(data.items.length > 0){
                ID = data.items[data.items.length - 1].id + 1;
            } else{
                ID = 0;
            }
            calories = parseFloat(calories);
            const newItem = new Item(ID, name, calories);
            data.items.push(newItem);
            return newItem;
        },
        getItemById :function(id){
            let foundItem = null;
            data.items.forEach(function(item){
                if(item.id === id){
                    foundItem = item;
                }
            });
            return foundItem;
        },
        setCurrentItem :function(item){
            data.currItem = item;           
        },
        getItems: function(){
            return data.items;
        },
        getTotalCalories : function(){
            let total = 0;
            data.items.forEach(function(item){
                total += item.calories;
            });
            data.totalCalories = total;
            return total;
        },
        getCurrentItem :function(){
            return data.currItem;
        },
        updateItem :function(newName, newCalories){
            let found = null;
            data.items.forEach(function(item){
                if(item.id === data.currItem.id){
                    item.name = newName;
                    item.calories = newCalories;
                    found = item;
                }
            });
            return found;
        },
        deleteItem :function(id){
            const idsArr = data.items.map(function(item){
                return item.id;
            });
            const index = idsArr.indexOf(id);
            data.items.splice(index, 1);
        },
        clearAllItems :function(){
            data.items = [];
        }
        // logData : function(){
        //     console.log(data);
        // }
    }
})();
const UICtrl = (function(){
    UIselectors = {
        itemList : '#item-list',
        listItems : '#item-list li',
        addBtn : '.add-btn',
        updateBtn : '.update-btn',
        deleteBtn : '.delete-btn',
        backBtn : '.back-btn',
        clearBtn : '.clear-btn',
        itemNameInput: '#item-name',
        itemCalorieInput : '#item-calories',
        totalCalories : '.total-calories'
    }
    return{
        populateItemList : function(items){
        document.querySelector(UIselectors.itemList).style.display = 'block';
        let output = '';
        items.forEach(function(item){
            output+= `
            <li class="collection-item" id="item-${item.id}">
                <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
                <a href="#" class="secondary-content">
                    <i class="edit-item fa fa-pencil"></i>
                </a>
            </li>
            `;
           });
        document.querySelector(UIselectors.itemList).innerHTML = output;
        },
        addListItem : function(item){
            document.querySelector(UIselectors.itemList).style.display = 'block';
            const li = document.createElement('li');
            li.className = 'collection-item';
            li.id = `item-${item.id}`;
            li.innerHTML = `
                <strong>${item.name}</strong> <em> ${item.calories} calories </em>
                <a href="#" class="secondary-content">
                    <i class="edit-item fa fa-pencil"></i>
                </a>
            `;
            document.querySelector(UIselectors.itemList).insertAdjacentElement('beforeend',li);
        },
        updateListItem : function(updateItem){            
            let listItems = document.querySelectorAll(UIselectors.listItems);
            listItems = Array.from(listItems);            
            listItems.forEach(function(listItem){
                const listItemID = listItem.getAttribute('id');             
                if(listItemID === `item-${updateItem.id}`){
                    document.getElementById(listItemID).innerHTML = `
                    <strong>${updateItem.name}: </strong> <em>${updateItem.calories} Calories</em>
                    <a href="#" class="secondary-content">
                     <i class="edit-item fa fa-pencil"></i>
                    </a>
                    `;
                }
            });
        },
        deleteListItem :function(id){
            document.querySelector(`#item-${id}`).remove();
        },
        clearAllItems :function(){
            UICtrl.hideItemList();
        },
        clearInputFields: function(){
            document.querySelector(UIselectors.itemNameInput).value = '';
            document.querySelector(UIselectors.itemCalorieInput).value = '';
        },

        hideItemList : function(){
            document.querySelector(UIselectors.itemList).style.display = 'none';
        },
        getItemInput : function(){            
            return {
                name : document.querySelector(UIselectors.itemNameInput).value,
                calories : parseFloat(document.querySelector(UIselectors.itemCalorieInput).value)
            }
        },
        showTotalCalories : function(total){
            document.querySelector(UIselectors.totalCalories).textContent = total;
        },
        showCurrentItemOnForm :function(){
            document.querySelector(UIselectors.itemNameInput).value = ItemCtrl.getCurrentItem().name;
            document.querySelector(UIselectors.itemCalorieInput).value = ItemCtrl.getCurrentItem().calories;
            UICtrl.showEditState();
        },
        showEditState : function(){            
            document.querySelector(UIselectors.updateBtn).style.display = 'inline';
            document.querySelector(UIselectors.deleteBtn).style.display = 'inline';
            document.querySelector(UIselectors.backBtn).style.display = 'inline';
            document.querySelector(UIselectors.addBtn).style.display =  'none';
        },
        clearEditState : function(){
            UICtrl.clearInputFields();
            document.querySelector(UIselectors.updateBtn).style.display = 'none';
            document.querySelector(UIselectors.deleteBtn).style.display = 'none';
            document.querySelector(UIselectors.backBtn).style.display = 'none';
            document.querySelector(UIselectors.addBtn).style.display = 'inline';
        },
        getSelectors : function(){
            return UIselectors;
        }
    }
})();
const App = (function(ItemCtrl, UICtrl, StorageCtrl){
    const loadEventListener = function(){
        const UIselectors = UICtrl.getSelectors();
        document.querySelector(UIselectors.addBtn).addEventListener('click',addMealSubmit);
        document.querySelector(UIselectors.itemList).addEventListener('click', itemEditClick);
        document.querySelector(UIselectors.updateBtn).addEventListener('click',itemUpdateSubmit);
        document.querySelector(UIselectors.backBtn).addEventListener('click',UICtrl.clearEditState);
        document.querySelector(UIselectors.deleteBtn).addEventListener('click',itemDeleteSubmit);
        document.querySelector(UIselectors.clearBtn).addEventListener('click',itemClearAllClick);
    }
    const addMealSubmit = function(e){
        const input = UICtrl.getItemInput();
        if(input.name !== '' && input.calories !== ''){
            //Add input item to ItemCtrl data
            const newItem = ItemCtrl.addNewItem(input.name, input.calories);
            //Display new item added using form to UI <ul>
            UICtrl.addListItem(newItem);
            const totalCalories = ItemCtrl.getTotalCalories();
            UICtrl.showTotalCalories(totalCalories);
            //Add input item to LS
            StorageCtrl.storeItemInLS(newItem);
            UICtrl.clearInputFields();
        }
        e.preventDefault();
    }
    //To Disable form submissin on Enter Key Press
    document.addEventListener('keypress', function(e){
        if(e.keyCode === 13 || e.which === 13){
            e.preventDefault();
            return false;
        }
    })
    const itemEditClick = function(e){
        if(e.target.classList.contains('edit-item')){
            let listId = e.target.parentElement.parentElement.id;
            const listIdArr = listId.split('-');
            const id = parseInt(listIdArr[1]);
            const itemToEdit = ItemCtrl.getItemById(id);
            ItemCtrl.setCurrentItem(itemToEdit);
            UICtrl.showCurrentItemOnForm();
            e.preventDefault();            
        }
    }
    const itemUpdateSubmit = function(e){
        const input = UICtrl.getItemInput();
        const updatedItem = ItemCtrl.updateItem(input.name, input.calories);       
        UICtrl.updateListItem(updatedItem);
        StorageCtrl.updateItemInLS(updatedItem);        
        const totalCalories = ItemCtrl.getTotalCalories();
        UICtrl.showTotalCalories(totalCalories);
        UICtrl.clearEditState();
        e.preventDefault();
    }
    const itemDeleteSubmit = function(e){
        const currItem = ItemCtrl.getCurrentItem();
        //Delete item from Data Structure
        ItemCtrl.deleteItem(currItem.id);
        // Delete item from UI
        UICtrl.deleteListItem(currItem.id);
        // Delete item from LS
        StorageCtrl.deleteFromLS(currItem.id);
        const totalCalories = ItemCtrl.getTotalCalories();
        UICtrl.showTotalCalories(totalCalories);
        UICtrl.clearEditState();
        if(ItemCtrl.getItems().length === 0 ){
            UICtrl.hideItemList();
        }
        e.preventDefault();
    }
    function itemClearAllClick(e){
        ItemCtrl.clearAllItems();
        UICtrl.clearAllItems();
        StorageCtrl.clearAllItems();
        const totalCalories = ItemCtrl.getTotalCalories();
        UICtrl.showTotalCalories(totalCalories);
        e.preventDefault();
    }
    return{
        init: function(){
            UICtrl.clearEditState();
            let items = ItemCtrl.getItems();        
            if(items.length === 0 ){
                UICtrl.hideItemList();
            } else{
                // UICtrl.addListItem(items);
                UICtrl.populateItemList(items);
            }
            const totalCalories = ItemCtrl.getTotalCalories();
            UICtrl.showTotalCalories(totalCalories);
            loadEventListener();
        }
    }
})(ItemCtrl, UICtrl, StorageCtrl);

App.init();


/*
    Initially when we had Hardcoded data.item = [{ }, { }]
    UICtrl had PUBLIC method
        populateItemList : function(items){
        document.querySelector(UIselectors.itemList).style.display = 'block';
        let output = '';
        items.forEach(function(item){
            output+= `
            <li class="collection-item" id="item-${item.id}">
                <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
                <a href="#" class="secondary-content">
                    <i class="fa fa-pencil"></i>
                </a>
            </li>
            `;
        });
        document.querySelector(UIselectors.itemList).innerHTML = output;
        }
    We call that public method from AppCtrl.init() -> UICtrl.populateItemList(items);
    Note: populateItemList() is must have if you want to generate <li> in UI when you have multiple items at once. Like we had in Hardcoded items. But for adding item one by one, UICtrl.addListItem() does the job. At last when we implement LS, there will be mulitple items, so populateItemList() is must have. If you use addListItem(), your UI will only show single item like,
        <strong>undefined</strong> <em>undefined</em> calories.

*/