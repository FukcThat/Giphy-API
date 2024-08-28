// Variables
const img = document.querySelector("img");
const newCatBtn = document.querySelector(".new-cat-btn");
const searchInput = document.querySelector(".search-input");
const searchBtn = document.querySelector(".search-btn");

// Fetch Function
const fetchCatGif = () => {
  fetch(
    "https://api.giphy.com/v1/gifs/translate?api_key=Ynj3YARhHhwDASPE0Qbsj0BpW3ydL6Sb&s=default",
    { mode: "cors" }
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      img.src = response.data.images.original.url;
    });
};

const searchGifs = () => {};

searchBtn.addEventListener("click", () => {
  searchGifs();
});

//Event Listeners
newCatBtn.addEventListener("click", (e) => {
  e.preventDefault();
  fetchCatGif();
});
