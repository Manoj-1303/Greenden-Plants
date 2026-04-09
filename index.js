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