const filterContainer = document.querySelector(".gallery-filter")
const galleryItems = document.querySelectorAll(".gallery-item")
filterContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("filter-item")) {
        filterContainer.querySelector(".active").classList.remove("active")
        e.target.classList.add("active");
        const filterValue = e.target.getAttribute("data-filter");
        galleryItems.forEach((item) => {

            if (item.classList.contains(filterValue) || filterValue === "all") {
                item.classList.add("show")
                item.classList.remove("hide")
            } else {
                item.classList.add("hide")
                item.classList.remove("show")

            }
           
        })
    }
})
