const myLibrary = [];
const form = document.querySelector(".addBookForm");

function showForm() {
    form.style.display = "block";
}

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function appendToDisplay() {
    let tableBody = document.querySelector("tbody");
    
    myLibrary.forEach (book => {
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
                if (bookInfo[3] === "No") {
                    tableData.appendChild(input);
                    tableRow.appendChild(tableData);
                }
                else {
                    input.checked = true;
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

const defaultBook = new Book("The Hobbit", "J.R.R Tolkien", "295", "No")

const book1 = new Book("To kill a MockingBird", "Harper Lee", "281", "Yes")

addBookToLibrary(defaultBook);
addBookToLibrary(book1);
appendToDisplay();
