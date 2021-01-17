class UI{
    constructor()
    {
        this.post = document.querySelector('#posts');
        this.titleInput = document.querySelector('#title');
        this.bodyInput = document.querySelector('#body');
        this.idInput = document.querySelector('#id');
        this.postSubmit = document.querySelector('.post-submit');
        this.formState = 'add'; //Default State is to add the posts.
    }
    showPosts(posts){ 
        let output = '';
        
        posts.forEach((post) => {
            output += `
                <div class="card mb-3">
                    <div class="card-body">
                        <h4 class="card-title">${post.title}</h4>
                        <p class="card-text">${post.body}</p>
                        <a href="#" class="edit card-link" data-id="${post.id}">
                            <i class="fa fa-pencil"></i>
                        </a>                         
                        <a href="#" class="delete card-link" data-id="${post.id}">
                            <i class="fa fa-remove"></i>
                        </a>
                    </div>
                </div>
            `;
        });
        
        this.post.innerHTML = output;
    }
    showAlert(msg, className){
        this.clearAlert();
        const div = document.createElement('div');
        div.className = className;
        div.textContent = msg;
        const container = document.querySelector('.postsContainer');
        const posts = this.post;
        container.insertBefore(div, posts);

        setTimeout( () =>{
            this.clearAlert();
        }, 3000)
    }
    clearAlert(){
        const currentAlert = document.querySelector('.alert');
        if(currentAlert){
            currentAlert.remove();
        }
    }
    clearFields(){
        this.titleInput.value = '';
        this.bodyInput.value = '';    
    }
    
    fillForm(post){
     this.titleInput.value = post.title;
     this.bodyInput.value = post.body;   
     this.idInput.value = post.id;
     this.changeFormState('edit');
    }
    changeFormState(type){
        if(type === 'edit'){
            this.postSubmit.textContent = 'Update Post';
            this.postSubmit.className = 'post-submit btn btn-warning btn-block';
            const button = document.createElement('button');
            button.textContent = 'Cancel Edit';
            button.className = 'post-cancel btn btn-light btn-block';
            const cardForm = document.querySelector('.card-form');
            const formEnd = document.querySelector('.form-end');
            cardForm.insertBefore(button, formEnd);
            
        } else{
            this.postSubmit.textContent = 'Post It';
            this.postSubmit.className = 'post-submit btn btn-primary btn-block';
            if(document.querySelector('.post-cancel')){
                document.querySelector('.post-cancel').remove();
            }
            this.clearFields();
            //Clear ID from hidden input field
            this.clearIdInput();
        }
    }
    clearIdInput(){
        this.idInput.value = '';
    }
}

export const ui = new UI();