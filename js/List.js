import Movie from "./Movie.js"

export default class List{
    constructor(list){
        this.list = list;
    }

    prepareList(parent){
        console.log(parent)
        const template = document.getElementById("movie-card-template")
        this.list.forEach(element => {
            const movie = new Movie(element);
            movie.renderWithTemplate(template, parent);
            parent.append(movie);
        });
    }
}