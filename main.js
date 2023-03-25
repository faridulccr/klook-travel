// all titles element
const placeName = document.querySelectorAll(".place-name");
// all links element
const desPlace = document.querySelectorAll(".des-place");
placeName.forEach((item) => {
    item.addEventListener("mouseenter", (e) => {
        // remove active class
        placeName.forEach((value) => {
            value.classList.remove("active");
        });
        e.target.classList.add("active");

        // hidden all links
        desPlace.forEach((value) => {
            value.style.display = "none";
        });
        document.getElementById(`${e.target.id}-link`).style.display = "block";
    });
});