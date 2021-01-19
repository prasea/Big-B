function Book(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}
function UI(){}

UI.prototype.getBooksFromLS = function(){
    let books;
    if(localStorage.getItem('books')===null){
        books = [];
    } else{
        books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
}

document.addEventListener('DOMContentLoaded', function(e){
    const ui = new UI();
    const books = ui.getBooksFromLS();
    books.forEach(function(book){
        ui.addBookToUI(book);
    })
})

document.getElementById('book-form').addEventListener('submit', formSubmit);
function formSubmit(e){
    const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value;
    const book = new Book(title,author, isbn);
    const ui = new UI();
    if(title === '' || author === '' || isbn === ''){
        ui.showAlert('Please fill the field', 'error');
    } else{
        ui.addBookToLS(book);
        ui.addBookToUI(book);
        ui.showAlert('Book Added', 'success');
        ui.clearFields();
    }
    e.preventDefault();
}
UI.prototype.addBookToLS = function(book){
    const books = this.getBooksFromLS();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
}
UI.prototype.addBookToUI = function(book){
    const tbody = document.getElementById('book-list');
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">X</a></td>
    `;
    tbody.appendChild(row);
}
UI.prototype.clearFields = function(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}
UI.prototype.showAlert = function(msg, className){
    const div = document.createElement('div');
    div.textContent = msg;
    div.className = `alert ${className}`;
    const container = document.querySelector('.container');
    const heading = document.querySelector('h1');
    container.insertBefore(div, heading);

    setTimeout(function(){
        div.remove();
    },1000)
}

//Delete Event Listener
document.getElementById('book-list').addEventListener('click', function(e){
    const ui = new UI();
    ui.removeFromUI(e.target);
    ui.removeFromLS(e.target.parentElement.previousElementSibling.textContent);
    ui.showAlert('Book Removed', 'error')
    e.preventDefault();
});

UI.prototype.removeFromUI = function(target){
    if(target.className === 'delete'){
        target.parentElement.parentElement.remove();
    }
}

UI.prototype.removeFromLS = function(isbn){
    const books = this.getBooksFromLS();
    books.forEach(function(book,index){
        if(book.isbn === isbn){
            books.splice(index, 1);
        }
    });
    localStorage.setItem('books', JSON.stringify(books));
}
