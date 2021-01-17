
const github = new Github;
const ui = new UI;
const UIusername = document.getElementById('username');

UIusername.addEventListener('keyup', e =>{
    const searchedUsername = e.target.value;
    if(searchedUsername !== ''){
        github.getUsers(searchedUsername)
            .then(returnedObject => {
                if(returnedObject.profileData.message === "Not Found"){
                    //show alert   
                    ui.showAlert("User not found", "alert alert-danger");    
                } else{
                    ui.showProfile(returnedObject.profileData);                    
                    ui.showRepos(returnedObject.repoData);
                }
            })
        
    } else{
        //If input field is blank
        ui.hideProfile();
    }
})