import { getParam, searchMovie } from "./utils.js";

const movieTitle = getParam("movie");
const div = document.querySelector(".movie-details");

const la = await searchMovie(div, movieTitle)
console.log(la)


