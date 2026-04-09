//Selecting side navbar
var sideNav = document.getElementById("side-nav");
var openNav = document.getElementById("open-nav");
var closeNav = document.getElementById("close-nav");
var sideNavOverlay = document.getElementById("side-nav-overlay");

function openSideNav() {
    if (!sideNav || !sideNavOverlay) return;

    sideNav.classList.remove("translate-x-full");
    sideNav.classList.add("translate-x-0");
    sideNavOverlay.classList.remove("opacity-0", "pointer-events-none");
    sideNavOverlay.classList.add("opacity-100");
}

function closeSideNav() {
    if (!sideNav || !sideNavOverlay) return;

    sideNav.classList.remove("translate-x-0");
    sideNav.classList.add("translate-x-full");
    sideNavOverlay.classList.remove("opacity-100");
    sideNavOverlay.classList.add("opacity-0", "pointer-events-none");
}

//Open side navbar
if (openNav) {
    openNav.addEventListener("click", openSideNav);
}

//Close side navbar
if (closeNav) {
    closeNav.addEventListener("click", closeSideNav);
}

if (sideNavOverlay) {
    sideNavOverlay.addEventListener("click", closeSideNav);
}

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        closeSideNav();
    }
});

window.addEventListener("resize", function () {
    if (window.innerWidth >= 768) {
        closeSideNav();
    }
});
//Product Search Functionality
var productContainer = document.getElementById("product-container");
var productSearch = document.getElementById("product-search");
var productList = document.querySelectorAll("#product-container > div");
if (productSearch && productContainer) {
    productSearch.addEventListener("input", function (event) {
        var enterValue = event.target.value.toLowerCase();
        for (var count = 0; count < productList.length; count++) {
            var productName = productList[count].querySelector("h1").textContent.toLowerCase();
            if (productName.indexOf(enterValue) < 0) {
                productList[count].style.display = "none";
            } else {
                productList[count].style.display = "block";
            }
        }
    });
}