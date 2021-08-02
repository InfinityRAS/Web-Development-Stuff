class Book {
    constructor(id, name, author, type, desc) {
        this.id = id
        this.name = name
        this.author = author
        this.type = type
        this.desc = desc
    }
}

class Display {
    constructor() { }

    show(icon, msg, type) {
        let alertDiv = document.getElementById("alert-div")
        const uiString = `
                        <div class="alert alertDiv alert-${type} alert-dismissible fade show" role="alert">
                            ${icon}
                            ${msg}
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>`;

        alertDiv.innerHTML += uiString;
        setTimeout(() => {
            alertDiv.removeChild(document.getElementsByClassName("alertDiv")[0])
        }, 3000);
    }

    add (book) {
        const booksDiv = document.getElementById("books-div")
        const uiString = `
                        <div class="card my-3 mx-3" style="width: 18rem; display:inline-block;" id=${book.id}>
                            <div class="card-header">
                                <h5 class="card-title">${book.name}</h5> </div>
                            <div class="card-body" style="overflow: auto; height: 59px;">
                                <h6 class="card-heading">By ${book.author}</h6>
                            </div>
                            <hr style="margin: 5px 0px; margin-top: 0;">
                            <div class="card-body" style="height: 160px; overflow: auto;">
                                <p class="card-text">${book.desc} </p>
                            </div>
                            <hr>
                            <div class="card-body" style="padding-top: 0;">
                                <h6 class="card-heading">Type: ${book.type} </h6>
                            </div>
                            <hr style="margin-top: 0;">
                            <div class="card-body" style="padding-top: 0;">
                                <button class="btn btn-danger" onClick="deleteBook(${book.id})">Delete Todo</button>
                            </div>
                        </div>`
        booksDiv.innerHTML += uiString
    }

    resetForm() {
        const form = document.getElementById("form")
        form.reset()
    }

    check() {
        let booksDiv = document.getElementById("books-div")
        if (booksDiv.innerHTML === "") {
            booksDiv.innerHTML = "<h6 id='heading'>No Books to Display.. Click on <strong>Add Books</strong> Button to Add a book</h6>"
        }   else {
            booksDiv.removeChild(document.getElementById("heading"))
        }
    }
}

const display = new Display();
window.onload = display.check()

const form = document.getElementById("form")
form.addEventListener("submit", (e) => {
    console.log("submit event fired!");
    e.preventDefault()

    let name = document.getElementById("name").value
    let author = document.getElementById("author").value
    let programming = document.getElementById("programming")
    let science = document.getElementById("science")
    let others = document.getElementById("others")
    let desc = document.getElementById("desc").value;
    let type;
    let id = new Date;
    id = id.getTime();

    if (programming.checked) { type = programming.value }
    else if (science.checked) { type = science.value }
    else { type = others.value }

    const book = new Book(id, name, author, type, desc)

    // console.log(name, author, type)
    if (name == "" && author == "" && desc == "") {
        display.show(`<svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>`, "You should fill all the fields to add a book", "danger")
    }   else {
        display.show(`<svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>`, "Successfully added your book..!!", "success")
        display.add(book)
        display.resetForm()
    }
    display.check()

})

const deleteBook = (id) => {
    const child = document.getElementById(id)
    const booksDiv = document.getElementById("books-div")
    booksDiv.removeChild(child)
    display.check()
}
