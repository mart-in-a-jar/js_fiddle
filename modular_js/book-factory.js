const logBookTitle = (title) => {
    const logTitle = () => {
        console.log(`The book is called ${title}.`);
    }
    return {logTitle};
}

const book = (title, author, pages, read) => {
    function info() {
        const readOrNot = read ? "has been read" : "not read yet";
        return `${title} by ${author}, ${pages} pages, ${readOrNot}`;
    }
    // Inherit specific function
    // const {logTitle} = logBookTitle(title);
    // return {title, author, pages, read, info, logTitle};

    // Inhereit whole object
    const prototype = logBookTitle(title);
    return Object.assign({title, author, pages, read, info}, prototype);
}

const a = book("tittel", "forfatter", 234, true)
