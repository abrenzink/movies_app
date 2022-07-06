import List from "./List.js"

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '20c138aff4msh984f3bb3e22db99p18c2a5jsn394db2c70dec',
		'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com'
	}
};

const baseURL = "https://movie-database-alternative.p.rapidapi.com/";

export default class ExternalServices {
    constructor(){
      this.search = document.querySelector("#fn").value;
    }

    async getData() {
      await fetch(`${baseURL}?s=${this.search}&r=json&page=1`, options)
      .then(response => response.json())
      .then(response => {
        const div = document.querySelector(".main-result")
        const list = new List(response.Search);
        list.prepareList(div);
      })
      .catch(err => console.error(err));
    }
}