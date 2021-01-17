const pageState = function(){
    let currentState;
    this.init = function(){
        currentState = new homeState(this);
        // this.changeState(new homeState);        
        this.changeState(currentState);        
    }
    this.changeState = function(state){
        currentState = state;
    }
}
function homeState(page){
    document.querySelector('#heading').textContent = 'Home Page'
    document.querySelector('#content').innerHTML = '<p>Welcome to home page</p>'
}
function aboutState(page){
    document.querySelector('#heading').textContent = 'About Page'
    document.querySelector('#content').innerHTML = '<p>Welcome to about page</p>'
}
function contactState(page){
    document.querySelector('#heading').textContent = 'Contact Page'
    document.querySelector('#content').innerHTML = '<p>Welcome to contact page</p>'
}
const page = new pageState();
page.init();

document.getElementById('home').addEventListener('click', e => {
    // page.changeState(homeState());
    page.changeState(new homeState);
    e.preventDefault();
})
document.getElementById('about').addEventListener('click', e => {
    // page.changeState(aboutState());
    page.changeState(new aboutState);
    e.preventDefault();
})
document.getElementById('contact').addEventListener('click', e => {
    // page.changeState(contactState());
    page.changeState(new contactState);
    e.preventDefault();
})

