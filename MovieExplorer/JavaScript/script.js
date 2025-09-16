
let products = []
let filteredProducts = [];
let currentPage = 1;
const itemsPerpage = 10;
let currentCategory = "";


const searchInput = document.getElementById("search-input")
// const searchBtn = document.getElementById("searchBtn")
document.getElementById("searchBtn").addEventListener("keyup", searchProductBtn)

const productCard = document.getElementById("product-card");
const pagination = document.getElementById("pagination")

const ul = document.createElement("ul")




function displayProducts(productList = products) {

    ul.innerHTML = "";
    fetch("https://dummyjson.com/products?limit=50&skip=0")
        .then((res) => res.json())
        .then((data) => {
            products = data.products



            products.map(product => {
            // console.log(product)

                let li = document.createElement('li')
                let title = document.createElement("h2")
                let img = document.createElement("img")
                let price = document.createElement("p")
                let button = document.createElement("button")
                let addToCart = document.createElement("button")

                // console.log(title, img, price)


                img.src = product.thumbnail
                title.innerHTML = product.title
                price.innerHTML = "Price: " + " " + "$" + product.price
                addToCart.innerHTML = "Cart"
                addToCart.innerHTML = "Cart"
                button.innerHTML = "Buy Now"

                // movieCard.appendChild(title)

                li.appendChild(img);
                li.appendChild(title);
                li.appendChild(price);
                li.appendChild(addToCart)
                li.appendChild(button)
                ul.appendChild(li)
                // console.log(ul)

        })
    })

    productCard.appendChild(ul)

}
displayProducts()

function searchProductBtn() {

    const normalize = (str) => str.toLowerCase().trim().replace(/\s+/g, " ");
    const search = normalize(document.getElementById("search-input").value);




    const filteredValue = products.filter((item) =>

        normalize(item.title || "").includes(search) || normalize(item.title || "").toLowerCase().trim().includes(search)
    )

    console.log(filteredValue)
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