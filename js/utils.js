import ExternalServices from "./ExternalServices.js";
import List from "./List.js";

export function addListener(event, elementId, callback){
    const element = document.querySelector(elementId);
    element.addEventListener(event, callback);
}

export async function searchMovie(element, word){
    element.innerHTML = "";
	let search = new ExternalServices(word);
    await search.getData();
	return search.data.Search;
}

export function getParam(param) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get(param);
}

export function renderList(dataList, element){
    const list = new List(dataList);
    list.prepareList(element);
}