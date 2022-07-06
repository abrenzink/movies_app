const baseURL = "https://movie-database-alternative.p.rapidapi.com/";

async function convertToJson(res) {
    const data = await res.json();
    if (res.ok) {
      return data
    } else {
      throw { name: "servicesError", message: data };
    }
}

export default class ExternalServices {
    constructor(){}

    getData(movie) {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '20c138aff4msh984f3bb3e22db99p18c2a5jsn394db2c70dec',
                'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com'
            }
        };
        return fetch(`${baseURL}?s=${movie}&r=json&page=1`, options)
          .then(convertToJson)
          .then((data) => data.Result);
    }
}