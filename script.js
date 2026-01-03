const themeBtn = document.getElementById("theme-btn");
const body = document.body;

// Load saved theme
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
    body.className = savedTheme;
    themeBtn.textContent = savedTheme === "dark"
        ? "☀️ Light Mode"
        : "🌙 Dark Mode";
}

themeBtn.addEventListener("click", () => {
    body.classList.toggle("dark");
    body.classList.toggle("light");

    const currentTheme = body.classList.contains("dark") ? "dark" : "light";
    localStorage.setItem("theme", currentTheme);

    themeBtn.textContent = currentTheme === "dark"
        ? "☀️ Light Mode"
        : "🌙 Dark Mode";
});

const accesskey = 'your_access_key_here';
// https://unsplash.com/developers

const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMore = document.getElementById("show-more");

let keyword = "";
let page = 1;

async function searchImages() {
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}&per_page=12`;

    const response = await fetch(url);
    console.log("Response:", response);
    const data = await response.json();
    console.log("Data:", data);

    if(page === 1){
        searchResult.innerHTML = " ";
    }

    const results = data.results;
    console.log("results:", results);

    results.map((result) => {
        const image = document.createElement("img");
        image.src = result.urls.small;

        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";

        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
    });
    showMore.style.display = "block";
}

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    searchImages();
})

showMore.addEventListener("click",()=>{
    page++;
    searchImages();
})