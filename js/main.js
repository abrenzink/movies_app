import { addListener, searchMovie, renderList} from "./utils.js"

addListener("click", ".search", async () => {
    const value = document.querySelector("#fn").value;
    const div = document.querySelector(".main-result");
    const data = await searchMovie(div, value);
    renderList(data, div);
});

