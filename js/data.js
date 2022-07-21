const requestURL = "https://abrenzink.github.io/movies_app/data/movie.json";
const card = document.querySelector(".main-result");

fetch(requestURL)
  .then(function(response){
        return response.json();
        })
  .then(function(jsonObject){
    console.table(jsonObject);
    const movies = jsonObject['movies'];
    movies.forEach(displayMovies);
})

function displayMovies(movie) {
  let a = document.createElement("div");
  let img = document.createElement("img");
  let p = document.createElement("p");
  let ptype = document.createElement("p");
  let tspan = document.createElement("span");
  let yspan = document.createElement("span");
  
  
  a.href= 'https://ww1.cuevana3.me/?s=' + movie.title;
  a.target = "_blanck";
  a.className = "movie-card";
  img.src = movie.Poster;
  img.className = "movie-poster";
  tspan.className = "movie-tittle";
  tspan.textContent = `${movie.Title}`
  yspan.className = "movie-year";
  yspan.textContent = `${movie.Year}`;
  ptype.className = "movie-type";
  ptype.textContent = `${movie.Type}`;
  
  p.appendChild(tspan);
  p.appendChild(yspan);
  a.appendChild(img);
  a.appendChild(p);
  a.appendChild(ptype);
  
  card.appendChild(a);
}