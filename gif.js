// Variables
const img = document.querySelector("img");
const newCatBtn = document.querySelector(".new-cat-btn");
const searchInput = document.querySelector(".search-input");
const searchBtn = document.querySelector(".search-btn");

// Fetch Function
const fetchCatGif = () => {
  fetch(
    "https://api.giphy.com/v1/gifs/translate?api_key=Ynj3YARhHhwDASPE0Qbsj0BpW3ydL6Sb&s=cats",
    { mode: "cors" }
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      img.src = response.data.images.original.url;
    });
};

//Event Listeners
newCatBtn.addEventListener("click", (e) => {
  e.preventDefault();
  fetchCatGif();
});

const searchGifs = (searchTerm) => {
  const API_URL = `https://api.giphy.com/v1/gifs/translate?api_key=Ynj3YARhHhwDASPE0Qbsj0BpW3ydL6Sb&s=${searchTerm}`;

  fetch(API_URL, { mode: "cors" })
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      img.src = response.data.images.original.url;
    });
};

searchBtn.addEventListener("click", () => {
  searchGifs(getSearchInput());
});

// Helpers

const getSearchInput = () => {
  const searchText = searchInput.value;
  searchInput.value = "";
  return searchText;
};
