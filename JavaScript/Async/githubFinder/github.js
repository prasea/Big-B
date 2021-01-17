class Github{
    constructor(){
        this.client_id = '4c1588b0098c1320f917';
        this.client_secret = 'e7fb8dce218c4de491ec23639238d22036c46073';
        this.repos_count = 5;
        this.repos_sort = 'created : asc';
    }
    async getUsers(searchedUsername){
        const profileResponse = await fetch(`https://api.github.com/users/${searchedUsername}?client_id=${this.client_id}&client_sercret=${this.client_secret}`);
        const profileData = await profileResponse.json();
        
        const repoResponse = await fetch(`https://api.github.com/users/${searchedUsername}/repos?&per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_sercret=${this.client_secret}`);
        const repoData = await repoResponse.json();
        return{
            profileData : profileData,
            repoData : repoData            
        }
    }
}