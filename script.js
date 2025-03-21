const myLibrary = [];
const modal = document.querySelector(".modalOverlay");
const form = document.querySelector(".bookForm");
const closeButton = document.getElementById("closeButton");
const newBookButton = document.getElementById("newBookButton");
const tableBody = document.querySelector("tbody");

newBookButton.onclick = () => {
    modal.style.display = "flex";
}

closeButton.onclick = () => {
    modal.style.display = "none";
}

window.onclick = event => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const title = document.getElementById("title").value.trim();
    const author = document.getElementById("author").value.trim();
    const pages = document.getElementById("pages").value;
    const read = document.getElementById("read").checked;

    const book = new Book(title, author, pages, read);
    addBookToLibrary(book);
    form.reset();
    modal.style.display = "none";
    appendToDisplay();
})

class Book {
    constructor (title, author, pages, read){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    toggleStatus() {
        this.read = !this.read;
        appendToDisplay();
    }
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function appendToDisplay() {
    tableBody.textContent = "";
    
    myLibrary.forEach((book, index) => {
        let tableRow = document.createElement("tr");

        let bookInfo = Object.values(book);
        for(i = 0; i <= bookInfo.length; i++) {
            if (i < 3) {
                const tableData = document.createElement("td");
                const textNode = document.createTextNode(bookInfo[i]);
                tableData.appendChild(textNode);
                tableRow.appendChild(tableData);
            }
            else if (i === 3){
                const tableData = document.createElement("td");
                tableData.style.maxWidth = "50px";

                tableData.textContent = book.read ? "Read" : "Not read";
                tableRow.appendChild(tableData);
            }
            else {
                const removeButton = document.createElement("button");
                const statusButton = document.createElement("button");
                const div = document.createElement("div");
                const tableData = document.createElement("td");
                div.classList.add("options");
                removeButton.textContent = "Remove";
                removeButton.onclick = () => {
                    myLibrary.splice(index, 1);
                    appendToDisplay();
                }
                statusButton.textContent = 'Status';
                statusButton.onclick = () => {
                    book.toggleStatus();
                }

                div.appendChild(statusButton);
                div.appendChild(removeButton);
                tableData.appendChild(div);
                tableRow.appendChild(tableData);
            }
        }
        tableBody.appendChild(tableRow);
    })
}

const defaultBook = new Book("The Hobbit", "J.R.R Tolkien", 295, false)

const defaultBook2 = new Book("To kill a MockingBird", "Harper Lee", 281, true)

addBookToLibrary(defaultBook);
addBookToLibrary(defaultBook2);
appendToDisplay();
