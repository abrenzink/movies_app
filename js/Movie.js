export default class Movie{
    constructor(data){
        this.title = data.Title;
        this.year = data.Year;
        this.type = data.Type;
        if(data.Poster == "N/A"){
            this.poster = "../images/img-movi.jpg"
        } else{
            this.poster = data.Poster; 
        }     
        this.href = `../movie-page/index.html?movie=${this.title}`;
    }

    renderWithTemplate(parent){
        const template = document.getElementById("movie-card-template")
        const card = template.content.cloneNode(true);
        card.querySelector("img").src = this.poster;
        card.querySelector(".movie-title").textContent = this.title;
        card.querySelector(".movie-year").textContent = this.year;
        card.querySelector(".movie-type").textContent = this.type;
        parent.appendChild(card);
    }
}