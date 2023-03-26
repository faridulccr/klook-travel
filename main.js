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
let isMouseEnter = false;
let count = 0;
const top_search_input = document.getElementById("top-search-input");
const top_search_focused = document.getElementById("top-search-focused");
top_search_input.addEventListener("focus", (e) => {
    top_search_focused.style.display = "block";
});
top_search_focused.addEventListener("mouseenter", () => {
    isMouseEnter = true;
    count = 1;
});
top_search_focused.addEventListener("mouseleave", () => {
    isMouseEnter = false;
});

// focus event for slider search input
const slider_search_input = document.getElementById("slider-search-input");
const slider_search_sug = document.getElementById("slider-search-sug");
slider_search_input.addEventListener("focus", (e) => {
    slider_search_sug.style.display = "block";
});
slider_search_sug.addEventListener("mouseenter", () => {
    isMouseEnter = true;
    count = 1;
});
slider_search_sug.addEventListener("mouseleave", () => {
    isMouseEnter = false;
});

// when click outer of the element
document.getElementById("body").addEventListener("click", (e) => {
    if (count) {
        if (!isMouseEnter) {
            top_search_focused.style.display = "none";
            slider_search_sug.style.display = "none";
            count = 0;
        }
    }
});
