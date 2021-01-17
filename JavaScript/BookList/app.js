// UI variables
const UItitle = document.getElementById('title'),
    UIauthor = document.getElementById('author'),
    UIisbn = document.getElementById('isbn'),
    UIform = document.getElementById('book-form'),
    UIcontainer = document.querySelector('.container'),
    UItbody = document.getElementById('book-list');

   
// Book constructor
function Book(title, author, isbn){
    this.title =title;
    this.author = author;
    this.isbn = isbn;
}
// UI constructor
function UI() { }

UI.prototype.addBookToTable = function(book){
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">X</a></td>
    `;
    UItbody.appendChild(tr);
}
UI.prototype.getBooksFromLocaStorage = function(){
    let books;
    if(localStorage.getItem('books') === null){
        books = [];
    } else{
        books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
}
UI.prototype.addBookToLocalStorage = function(book){    
    const ui = new UI();
    const books = ui.getBooksFromLocaStorage();
    // books.push(book.title);
    // books.push(book.author);
    // books.push(book.isbn);
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
}
UI.prototype.removeBookFromTable = function(target){
    if(target.classList.contains('delete')){
        //target: <a href="#" class="delete">X</a>
        target.parentElement.parentElement.remove();
    }
}
UI.prototype.removeBookFromLocalStorage = function(isbn){
    const ui = new UI();
    const books = ui.getBooksFromLocaStorage();
    
    books.forEach(function(book,index){
        if(book.isbn === isbn){
            books.splice(index,1);
        }
    });
    localStorage.setItem('books', JSON.stringify(books));
}
UI.prototype.clearFields = function(){
    UItitle.value = '';
    UIauthor.value = '';
    UIisbn.value = '';
}
UI.prototype.showAlert = function(msg, className){
    const div = document.createElement('div');
    div.className = `alert ${className}`;
    // div.textContent = msg;
    div.appendChild(document.createTextNode(msg));
    UIcontainer.insertBefore(div, UIform);
    setTimeout(function(){
        div.remove();
    }, 2000);
}

// Fetch from localStorage and Paint UI
document.addEventListener('DOMContentLoaded', function(e){
    const ui = new UI();
    const books = ui.getBooksFromLocaStorage();
    // console.log(books); //(3)[{"Book One", "Jane", "123"},{},{}]
    books.forEach(function(book){
        ui.addBookToTable(book);
    })
})
UIform.addEventListener('submit', function(e){
    const title = UItitle.value,
        author = UIauthor.value,
        isbn = UIisbn.value;
    const book = new Book(title,author,isbn);
    
    const ui = new UI();
    if(title === '' || author === '' || isbn === ''){
        ui.showAlert('Please fill out every fields', 'error');
    } else{
        ui.addBookToTable(book);
        ui.clearFields();
        ui.showAlert('Book Added!', 'success');
        ui.addBookToLocalStorage(book);
    }
    e.preventDefault();
})

// To delete Book, we use Event Delgation as books are added dynamically
UItbody.addEventListener('click', function(e){
    const ui = new UI();
    ui.removeBookFromTable(e.target);
    ui.removeBookFromLocalStorage(e.target.parentElement.previousElementSibling.textContent);
    e.preventDefault();
})