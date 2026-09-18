const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");

if (menuBtn && sidebar) {
    menuBtn.addEventListener("click", () => {
        sidebar.classList.toggle("open");
    });
}

const searchBtn = document.getElementById("searchBtn");
const bookSearch = document.getElementById("bookSearch");

if (searchBtn && bookSearch) {
    searchBtn.addEventListener("click", () => {
        bookSearch.focus();
    });

    bookSearch.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            const query = bookSearch.value.trim();

            if (query) {
                alert("Search submitted for: " + query);
            }
        }
    });
}