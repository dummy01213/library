// 1. There is a form element and a container
// 2. If form submit, add a book in the booklist 
// 3. Populate container with books
// 4. Add delete button in container to delete a book

const form = document.querySelector("form");
const container = document.querySelector(".container")

form.onsubmit = (e) =>{
    e.preventDefault()
    const title = form["title"].value;
    const author = form["author"].value;
    const pages = form.pages.value;
    const read = form.read.value;
    let book = {
        "title": title,
        "author": author,
        "pages": pages,
        "read": read == "on" ? true : false,
    }
    books[title] = book;
    populate();
}

const books = {
    "Title01": {
        "title": "Title01",
        "author": "Author01",
        "pages": 90,
        "read": false,
    },
};


const deleteBook = (e) => {
    let book = e.target.value;
    delete books[book]
    populate();
}

const populate = () =>{
    container.innerHTML = "";
    for (let book of Object.keys(books)){
        book = books[book];
        const card = document.createElement("div");
        const title = document.createElement("h2");
        const author = document.createElement("h3");
        const pages = document.createElement("p", book.pages);
        const read = document.createElement("p", book.read);
        const dlt = document.createElement("button")
        dlt.setAttribute("value", book.title);
        dlt.onclick = deleteBook;
        title.innerText = book.title;
        author.innerText = book.author;
        pages.innerText = book.pages;
        read.innerText = book.read;
        dlt.innerHTML = "Delete"
        for (info of [title, author, pages, read, dlt]){
            card.appendChild(info)
        }
        container.appendChild(card)
    }
}

populate();