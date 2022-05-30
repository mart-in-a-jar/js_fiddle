function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        let readOrNot = "not read yet";
        if (read) readOrNot = "has been read";
        return `${title} by ${author}, ${pages} pages, ${readOrNot}`;
    }
}