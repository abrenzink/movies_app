const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '20c138aff4msh984f3bb3e22db99p18c2a5jsn394db2c70dec',
		'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com'
	}
};

const baseURL = "https://movie-database-alternative.p.rapidapi.com/";

export default class ExternalServices {
    constructor(){}

    getData(movie) {
      let movie = document.querySelector("#fn").value;
      fetch(`${baseURL}?s=${movie}&r=json&page=1`, options)
      .then(response => response.json())
      .then(response => {
        console.log(response.search)
      })
      .catch(err => console.error(err));
    }
}