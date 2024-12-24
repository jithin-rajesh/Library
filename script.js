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

console.log(myLibrary);

function addCard() {
    cards.innerHTML = "";
    myLibrary.forEach((book, index) => {
        const card = document.createElement('div');
        card.dataset.index = index;
        card.classList.add('card');
        const buttons = document.createElement('div');
        const deleteBook = document.createElement('div');
        deleteBook.classList.add('delete');
        buttons.classList.add('buttons');
        
        const label = document.createElement('label');
        label.className = 'switch';
        const input = document.createElement('input');
        input.type = "checkbox";
        input.className = 'ReadCheck'
        const span = document.createElement('span');
        span.className = 'slider round';

        
        
        const elements = ['title', 'author', 'pages', 'read'].map(prop => {
            const div = document.createElement('div');
            div.classList.add(prop);
            
            if (prop === 'read') {
                div.textContent = book.read ? 'Read' : 'Not Read Yet';
                card.style.color = book.read ? 'blue' : 'red';
                input.checked = book.read;
            } else {
                div.textContent = `${prop.charAt(0).toUpperCase() + prop.slice(1)}: ${book[prop]}`;
            }
            
            return div;
        });
        
        elements.forEach(element => card.appendChild(element));
        
        label.appendChild(input);
        label.appendChild(span);

        buttons.appendChild(label);
        buttons.appendChild(deleteBook);
        card.appendChild(buttons);
        cards.appendChild(card);
    });
}



cards.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
        const card = e.target.closest('.card');
        const index = parseInt(card.dataset.index);
        myLibrary.splice(index, 1);
        addCard();
    }

    if (e.target.classList.contains('ReadCheck')){
        const card = e.target.closest('.card');
        const index = parseInt(card.dataset.index);
        const book = myLibrary[index];
        book.read = !book.read;

        addCard();

    }
});

addCard();

const addBook = document.querySelector('#add-book');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector("#pages");
const read = document.querySelector('#read');

addBook.addEventListener('click', (e) => {
    e.preventDefault();
    clearValidationMessages();

    const isValid = validateFields();

    if(isValid) {
        const book = new Book(title.value, author.value, parseInt(pages.value), read.checked);
        addBooktoLibrary(book);
        addCard();
        resetForm();
        dialog.close();
    }
    
});

function validateFields() {
    let isValid = true;
    
    if (!title.value.trim()) {
        setFieldError(title, "Please enter a title");
        isValid = false;
    }
    
    if (!author.value.trim()) {
        setFieldError(author, "Please enter an author");
        isValid = false;
    }
    
    if (!pages.value.trim()) {
        setFieldError(pages, "Please enter the number of pages");
        isValid = false;
    } else if (isNaN(pages.value) || parseInt(pages.value) <= 0) {
        setFieldError(pages, "Please enter a valid number of pages");
        isValid = false;
    }
    
    return isValid;
}

function setFieldError(element, message) {
    element.setCustomValidity(message);
    element.reportValidity();
}

function clearValidationMessages() {
    // Add event listener to the toggle switch
    [title, author, pages].forEach(element => {
        element.setCustomValidity('');
    });
}


function resetForm() {
    title.value = '';
    author.value = '';
    pages.value = '';
    read.checked = false;
}






