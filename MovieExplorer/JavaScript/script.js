
const searchInput = document.getElementById("search-input")
const searchBtn = document.getElementById("searchBtn")
document.getElementById("searchBtn").addEventListener("keyup", searchProductBtn)

const movieCard = document.getElementById("movie-card");
const ul = document.createElement("ul")

let productItems = []



function displayProducts() {


    fetch("https://dummyjson.com/products?limit=50&skip=0")
        .then((res) => res.json())
        .then((data) => {
            let products = data.products

            products.map(product => {
            // console.log(product)

                let li = document.createElement('li')
                let title = document.createElement("h2")
                let img = document.createElement("img")
                let price = document.createElement("p")
                let button = document.createElement("button")

                // console.log(title, img, price)


                img.src = product.thumbnail
                title.innerHTML = product.title
                price.innerHTML = "Price: " + " " + "$" + product.price
                button.innerHTML = "Buy Now"

                // movieCard.appendChild(title)

                li.appendChild(img);
                li.appendChild(title);
                li.appendChild(price);
                li.appendChild(button)
                ul.appendChild(li)
                // console.log(ul)

        })
    })

    movieCard.appendChild(ul)

}
displayProducts()

function searchProductBtn() {

    const search = document.getElementById("search-input").value.toLowerCase();
    console.log(search)

    const filteredValue = productItems.filter((item) =>

        item.title.toLowerCase().includes(search) || item.title.toLowerCase().includes(search)
    )
    displayProducts(filteredValue)
}

// function searchBookBtn() {

//     // const search = document.getElementById("search").value.trim();
//     const query = document.getElementById("search").value.toLowerCase();
//     console.log(query)
//     const filtered = books.filter(book =>
//         book.title.toLowerCase().includes(query) || book.author.toLowerCase().includes(query));
//     console.log(filtered)

//     displayBooks(filtered);
// }