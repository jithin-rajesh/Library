const myLibrary = [];

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

function addBookToLibrary() {
    
}