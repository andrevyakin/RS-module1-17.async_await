const URL_DATA_ALBUMS = "https://jsonplaceholder.typicode.com/albums";
const olOutput = document.querySelector(".data-container");

const toggleLoader = () => {
    const loader = document.querySelector("#loader");
    loader.hasAttribute("hidden")
        ? loader.removeAttribute("hidden")
        : loader.setAttribute("hidden", "");
}

const renderAlbums = async () => {
    toggleLoader();
    try {
        const response = await fetch(URL_DATA_ALBUMS);
        const dataAlbums = await response.json();
        dataAlbums.forEach(album => olOutput.innerHTML += `<li>${album.title}</li>`)
    } catch (error) {
        olOutput.textContent = "Произошла ошибка в получении данных об альбомах...";
    } finally {
        toggleLoader();
    }
}
renderAlbums();