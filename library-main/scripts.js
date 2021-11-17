//Book constructor
function Book(title, author, numPages, read) {
  this.title = title;
  this.author = author;
  this.numPages = numPages;
  this.read = read;
}

//Book Prototype
Book.prototype.changeStatus = function () {
  this.read === true ? (this.read = false) : (this.read = true);
};

//Fill Library(Array)
function addBookToLibrary() {
  myLibrary.push(
    new Book(
      titleInput.value,
      authorInput.value,
      parseInt(pagesInput.value),
      readInput.checked
    )
  );

  //Index in Library (Array) and Last Array item = Book card to create
  createCard(myLibrary.length - 1, myLibrary.slice(-1));
  resetForm();
}

//Selectors for book object
const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const pagesInput = document.querySelector("#pages");
const readInput = document.querySelector("#read");

//Selector for Cards Container (Row)
const cardsContainer = document.querySelector(".cards");

//Book Card creation
function createCard(bookAttribute, libraryLast) {
  let column = document.createElement("div");
  column.classList.add("col");
  column.setAttribute("data-book", `${bookAttribute}`);
  cardsContainer.appendChild(column); //Column

  let card = document.createElement("div");
  card.classList.add("card", "text-center", "bg-light");
  column.appendChild(card); //Card

  let keys = Object.keys(libraryLast[0]);

  keys.forEach((key) => {
    let cardData = document.createElement("p"); //CardData
    cardData.classList.add("card-text");
    if (key === "title") {
      let cardTitle = document.createElement("h5"); //CardTitle
      cardTitle.classList.add("card-title");
      cardTitle.textContent = libraryLast[0][`${key}`]; //Array[i]["Key"] Bracket Notation
      card.appendChild(cardTitle);
    } else if (key === "author") {
      cardData.textContent = libraryLast[0][`${key}`];
      card.appendChild(cardData);
    } else if (key === "numPages") {
      cardData.textContent = libraryLast[0][`${key}`] + " pages";
      card.appendChild(cardData);
    } else if (key === "read") {
      let cardRead = document.createElement("p");
      cardRead.setAttribute("data-book", `${bookAttribute}`);
      cardRead.textContent = setReadStatus(libraryLast[0][`${key}`]); //Read / Not Read
      card.appendChild(cardRead);
    }
  });

  let btnRead = document.createElement("button"); //Button Component
  btnRead.classList.add("btn", "btn-secondary", "btn-read");
  btnRead.setAttribute("data-book", `${bookAttribute}`);
  btnRead.textContent = "Update Status";
  card.appendChild(btnRead);

  readStatus(bookAttribute); //Set listener to read button

  let btnDelete = document.createElement("button"); //Button Component
  btnDelete.classList.add("btn", "btn-primary", "btn-delete");
  btnDelete.setAttribute("data-book", `${bookAttribute}`);
  btnDelete.textContent = "Delete Book";
  card.appendChild(btnDelete);

  deleteBook(bookAttribute); //Set listener to delete button
}
//End of Book Card creation function

function resetForm() {
  document.getElementById("form-one").reset();
}

//Add listener
function readStatus(bookAttribute) {
  const buttonRead = document.querySelector(
    `.btn-read[data-book="${bookAttribute}"]`
  );
  buttonRead.addEventListener("click", () => {
    let newAttribute = parseInt(buttonRead.getAttribute("data-book")); //newAttribute after cards removal
    myLibrary[newAttribute].changeStatus(); //Update Book in Library
    const paragraphRead = document.querySelector(
      `p[data-book="${newAttribute}"]`
    );
    paragraphRead.textContent = setReadStatus(myLibrary[newAttribute]["read"]);
  });
}

//Add listener
function deleteBook(bookAttribute) {
  const buttonDelete = document.querySelector(
    `.btn-delete[data-book="${bookAttribute}"]`
  );
  buttonDelete.addEventListener("click", () => {
    let newAttribute = parseInt(buttonDelete.getAttribute("data-book")); //newAttribute after cards removal
    myLibrary.splice(newAttribute, 1);
    const columnCardDelete = document.querySelector(
      `div[data-book="${newAttribute}"]`
    );
    columnCardDelete.remove();
    updateAttributes(newAttribute);
  });
}

function setReadStatus(boolean) {
  return boolean === true ? "Read" : "Not Read";
}

function updateAttributes(deleteIndex) {
  const highestList = document.querySelectorAll("[data-book]");
  highestList.forEach((element) => {
    if (parseInt(element.dataset.book) > deleteIndex) {
      element.dataset.book--;
    }
  });
}

//Initial Library Cards Creation
function startLibrary() {
  for (let i = 0; i < myLibrary.length; i++) {
    createCard(i, myLibrary.slice(i, i + 1));
  }
}

//Main App

let myLibrary = [];

myLibrary.push(new Book("Harry Potter", "J.K Rowling", 550, true));
myLibrary.push(new Book("The Hobbit", "J. R. R. Tolkien", 570, true));

if (myLibrary.length !== 0) {
  startLibrary();
}

//Book Form listener
const btnOne = document.querySelector("#btn-one");
btnOne.addEventListener("click", addBookToLibrary);
