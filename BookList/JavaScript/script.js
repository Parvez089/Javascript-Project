let books = [];

document.getElementById("addBtn").addEventListener("click", addBook);


document.getElementById("search").addEventListener("keyup", searchBookBtn)
document.getElementById("searchBtn").addEventListener("keyup", searchBookBtn)


function addBook(){
    const title = document.getElementById("title").value.trim();
    const author = document.getElementById("author").value.trim();
    const year = document.getElementById("year").value.trim();


    if(!title || !author || !year){
        alert("Please fill all fields!");
        return
    }

    const book = {title, author, year};
    books.push(book);

    displayBooks(books);

    // clear inputs
    document.getElementById("title").value = "";
    document.getElementById("author").value="";
    document.getElementById("year").value="";


    
}

function displayBooks(list){
    const tbody = document.querySelector("#bookList tbody");

    tbody.innerHTML = "";

    list.forEach((book, index)=>{
        const row = tbody.insertRow();

        row.insertCell(0).textContent = book.title;
        row.insertCell(1).textContent = book.author;
        row.insertCell(2).textContent = book.year;


        const deleteCell = row.insertCell(3);
        const btn = document.createElement("button");
        btn.textContent = "Delete";
        btn.onclick = ()=>{
            deleteBook(index);
        }
        deleteCell.appendChild(btn);
    })

}

function deleteBook(index) {
    books.splice(index, 1);
    displayBooks(books)
}


function searchBookBtn() {
    const query = document.getElementById("search").value.toLowerCase();
    const filtered = books.filter(book =>
        book.title.toLowerCase().includes(query) || book.director.toLowerCase().includes(query));

        displayBooks(filtered);
}