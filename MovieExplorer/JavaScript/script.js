const search = document.getElementById('search')
const cardList = document.getElementById("movie-card")


// const url = "https://www.omdbapi.com/?i=avengers&apikey=e18eb460"
// fetch(url)
//     .then((res) => res.json())
//     .then((data) => {
//         console.log(data.Search)
//         let movies = data;

//         movies.map((movie) => {
//             let poster = document.createElement("img")
//             poster.src = data.Poster

//             let title = document.createElement("h2")
//             title.innerText = data.Title
//         })




//         cardList.appendChild(poster)

//     })


fetch('https://www.omdbapi.com/?s=thor&page&apikey=e18eb460')
    .then(res => res.json())
    .then(data => {
        let movies = data.Search;
        movies.map(function (movie) {
            console.log(movie)
            let img = `<img src=${movie.Poster}>`
            let h1 = `<h1>${movie.Title}</h1>`
            console.log(h1)

            let poster = document.getElementById("#img")
            img.innerHTML = poster
            let title = document.getElementById("#title")
            h1.innerHTML = title
        })
    })

// 