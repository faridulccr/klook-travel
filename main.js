// all titles element
const placeName = document.querySelectorAll(".place-name");
// all links element
const desPlace = document.querySelectorAll(".des-place");
placeName.forEach((item) => {
    item.addEventListener("mouseenter", (e) => {
        const id = e.target.id;
        // remove active class
        placeName.forEach((value) => {
            if (id === value.id) {
                value.classList.add("active");
            } else {
                value.classList.remove("active");
            }
        });

        // hidden all links
        desPlace.forEach((value) => {
            if (`${id}-link` === value.id) {
                value.style.display = "block";
            } else {
                value.style.display = "none";
            }
        });
    });
});

// focus event for top search input
const top_search_input = document.getElementById("top-search-input");
const top_search_focused = document.getElementById("top-search-focused");
const top_search_container = document.getElementById("search-container");
top_search_input.addEventListener("focus", (e) => {
    top_search_focused.style.display = "block";
});

// focus event for slider search input
const slider_search_input = document.getElementById("slider-search-input");
const slider_search_sug = document.getElementById("slider-search-sug");
const slider_search_container = document.getElementById("search-container2");
slider_search_input.addEventListener("focus", (e) => {
    slider_search_sug.style.display = "block";
});

window.document.addEventListener("click", (e) => {
    // top search input
    if (
        !top_search_focused.contains(e.target) &&
        !top_search_container.contains(e.target)
    ) {
        top_search_focused.style.display = "none";
    }

    // slider search input
    if (
        !slider_search_sug.contains(e.target) &&
        !slider_search_container.contains(e.target)
    ) {
        slider_search_sug.style.display = "none";
    }
});
