const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '20c138aff4msh984f3bb3e22db99p18c2a5jsn394db2c70dec',
		'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com'
	}
};
let input = document.getElementById("fn");

let html = 'https://movie-database-alternative.p.rapidapi.com/?s=' + input + '&r=json&page=1'

fetch(html, options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

function search(){
    
}

