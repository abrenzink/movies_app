export default class Movie{
    constructor(data){
        this.title = data.Title;
        this.year = data.Year;
        this.type = data.Type;
        this.poster = data.Poster;
    }

    renderWithTemplate(parent){
        const template = document.getElementById("movie-card-template")
        const card = template.content.cloneNode(true);
        // console.log(this.title, this.year, this.type, this.poster)
        card.querySelector("img").src = this.poster;
        card.querySelector(".movie-title").textContent = this.title;
        card.querySelector(".movie-year").textContent = this.year;
        card.querySelector(".movie-type").textContent = this.type;
        parent.appendChild(card);
    }
}