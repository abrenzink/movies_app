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

    
}