export default class Movie{
    constructor(data){
        this.title = data.Title;
        this.year = data.Year;
        this.type = data.Type;
        this.poster = data.Poster;
    }

    renderWithTemplate(template, parent){
        let card = template.content.cloneNode(true);
        
        parent.appendChild(card);
    }
}