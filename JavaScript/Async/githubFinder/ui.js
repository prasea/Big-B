class UI{
    constructor(){
        this.output = document.getElementById('profile-placeholder');
    }
    showProfile(user){
        this.output.innerHTML = `
            <div class="card card-body mb-3">
                <div class="row">
                    <div class="col-md-3">
                        <img class="img-fluid mb-2" src="${user.avatar_url}">
                        <a href="${user.url}" class="btn btn-block btn-primary mb-2" target="_blank">View Profile</a>
                    </div>
                    <div class="col-md-9">
                        <span class="badge badge-primary"> Public Repos : ${user.public_repos} </span>
                        <span class="badge badge-primary"> Public Gists : ${user.public_gists} </span>
                        <span class="badge badge-primary"> Followers : ${user.followers} </span>
                        <span class="badge badge-primary"> Following : ${user.following} </span>
                        <br><br>
                        <ul class="list-group">
                            <li class="list-group-item">Company: ${user.company}</li>
                            <li class="list-group-item">Website/blog: ${user.blog}</li>
                            <li class="list-group-item">Location: ${user.location}</li>
                            <li class="list-group-item">Twitter: ${user.twitter_username}</li>
                            <li class="list-group-item">Member Since: ${user.created_at}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <h3 class="page-heading mb-3">Latest Repos</h3>
            <div id="repos-placeholder"></div>
        `;
    }
    showRepos(repos){
        let output = '';
        repos.forEach(repo =>{
            output += `
                <div class="card card-body mb-2">
                    <div class="row">
                        <div class="col-md-6">
                            <a href="${repo.html_url}">${repo.name}</a>
                        </div>
                        <div class="col-md-6">
                            <span class="badge badge-primary"> Watchers Count : ${repo.watchers_count} </span>
                            <span class="badge badge-primary"> Startgazers Count : ${repo.stargazers_count} </span>
                            <span class="badge badge-primary"> Forks Count : ${repo.forks_count} </span>
                        </div>
                    </div>
                </div>
            `;
        });
        document.getElementById('repos-placeholder').innerHTML = output;
    }
    showAlert(msg,className){
        this.hidePreviousAlert()
        const div = document.createElement('div');
        div.className += className;
        div.textContent = msg;
        const container = document.querySelector('.searchContainer');
        const search = document.querySelector('.search');
        container.insertBefore(div, search);
        setTimeout(() => {
            this.hidePreviousAlert();
        }, 3000)
    }
    hidePreviousAlert(){
        const previousAlert = document.querySelector('.alert');
        if(previousAlert){
            previousAlert.remove();
        }
    }
    hideProfile(){
        this.output.innerHTML = '';
    }

}