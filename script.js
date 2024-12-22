myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    let status = "not read yet"
    if(this.read == true)
        status = "read";
    else 
        status = "not read yet";
    this.info = function() {
        return this.title + " by " + this.author + ", " + this.pages + " pages, " + status; 
    };
}

function addBooktoLibrary(book) {
    myLibrary.push(book);
}

const theHobbit = new Book('The Hobbit', "J.R.R. Tolkien", "295", false);

const Norse = new Book('Norse Mythology', "Niel Gaiman", "200", true);

addBooktoLibrary(theHobbit);
addBooktoLibrary(Norse);

const showBtn = document.querySelector("#add");
const dialog = document.querySelector("#dialog");
const closeBtn = document.querySelector(".close");

showBtn.addEventListener("click", () => {
    dialog.showModal();
});

closeBtn.addEventListener("click", () => {
    dialog.close();
});

const cards = document.querySelector(".cards");
const addBtn = document.querySelector("#add");

addBtn.addEventListener('click', () => {

});

let card;

console.log(myLibrary);
function addCard() {
    for (let book of myLibrary) {
        card = document.createElement('div');
        card.classList.add('card');
        const elements = ['title', 'author', 'pages', 'read'].map(prop => {
            const div = document.createElement('div');
            div.classList.add(prop);
            
            div.textContent = prop === 'read' 
                ? (book.read ? card.setAttribute('style', "color: blue") : card.setAttribute('style', "color: red"))
                : `${prop.charAt(0).toUpperCase() + prop.slice(1)}: ${book[prop]}`;
                
            return div;
        });
        elements.forEach(element => card.appendChild(element));
        cards.appendChild(card);
        let deleteBook = document.createElement('div');
        deleteBook.classList.add('delete');
        card.appendChild(deleteBook);
        deleteBook.addEventListener('click', () =>{
            card.remove();
        });
    }
}



const addBook = document.querySelector('#add-book');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector("#pages");
const read = document.querySelector('#read');

addBook.addEventListener('click',(e) => {
    let book;
    console.log(pages.value);
    if (title.value && author.value && pages.value)
    {
        book = new Book(title.value, author.value, pages.value, false);
    }
    else
    {
        book = new Book(title.value, author.value, pages.value, read.checked);
    }
    addBooktoLibrary(book);
    console.log(read.checked);
    addCard();
});









