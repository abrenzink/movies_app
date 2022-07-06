import ExternalServices from "./ExternalServices.js";

export function addListener(event, elementId, callback){
    const element = document.querySelector(elementId);
    element.addEventListener(event, callback);
}

export function searchMovie(){
    const div = document.querySelector(".main-result")
    div.innerHTML = "";
	let search = new ExternalServices();
	search.getData();
}