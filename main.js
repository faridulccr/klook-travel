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
