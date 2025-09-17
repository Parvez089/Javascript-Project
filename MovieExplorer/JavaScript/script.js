
let products = []
let filteredProducts = [];
let currentPage = 1;
const itemsPerpage = 10;
let currentCategory = "";


const searchInput = document.getElementById("search-input")
// const searchBtn = document.getElementById("searchBtn")

const productCard = document.getElementById("product-card");
const pagination = document.getElementById("pagination")




function fetchProducts() {

    fetch("https://dummyjson.com/products?limit=50&skip=0")
        .then((res) => res.json())
        .then((data) => {
            products = data.products

            displayProducts(products)

        })
}
function displayProducts(productList = products) {


    productCard.innerHTML = ""

    const ul = document.createElement("ul")
    productList.forEach(product => {
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
    productCard.appendChild(ul)

}


function searchProductBtn() {

    const normalize = (str) => str.toLowerCase().trim().replace(/\s+/g, " ");
    const search = normalize(document.getElementById("search-input").value);
    console.log(search)


    if (search === "") {
        displayProducts(products)
        return;
    }

    const filteredValue = products.filter((item) =>
        normalize(item.title || "").includes(search)
    );

    displayProducts(filteredValue)
}


document.getElementById("search-input").addEventListener("keyup", searchProductBtn)

fetchProducts()