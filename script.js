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

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype

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
                let tableData = document.createElement("td");
                let textNode = document.createTextNode(bookInfo[i]);
                tableData.appendChild(textNode);
                tableRow.appendChild(tableData);
            }
            else if (i === 3){
                let input = document.createElement("input");
                let tableData = document.createElement("td");
                input.type = "checkbox";
                if (bookInfo[3] === true) {
                    input.checked = true;
                    tableData.appendChild(input);
                    tableRow.appendChild(tableData);
                }
                else {
                    tableData.appendChild(input);
                    tableRow.appendChild(tableData);
                }
            }
            else {
                let removeButton = document.createElement("button");
                let tableData = document.createElement("td");
                removeButton.textContent = "Remove";
                tableData.appendChild(removeButton);
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
