const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '20c138aff4msh984f3bb3e22db99p18c2a5jsn394db2c70dec',
		'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com'
	}
};

fetch('https://movie-database-alternative.p.rapidapi.com/?s=Avengers%20Endgame&r=json&page=1', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

