var cardPrice = document.querySelectorAll(".card-price");
var tbtn = document.querySelector(".tbtn");

cardPrice.forEach(function (item) {
    tbtn.addEventListener("click", function () {
        item.classList.toggle("none")
    })
})
