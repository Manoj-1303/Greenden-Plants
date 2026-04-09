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

// Contact form validation using regex patterns
var contactForm = document.getElementById("contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        var nameInput = contactForm.elements["name"];
        var emailInput = contactForm.elements["email"];
        var subjectInput = contactForm.elements["subject"];
        var messageInput = contactForm.elements["message"];

        var nameValue = nameInput.value.trim();
        var emailValue = emailInput.value.trim();
        var subjectValue = subjectInput.value.trim();
        var messageValue = messageInput.value.trim();

        var nameRegex = /^[A-Za-z ]{3,40}$/;
        var emailRegex = /^[a-zA-Z0-9]+@gmail\.com$/;
        var subjectRegex = /^[A-Za-z0-9 ,.?!'\-]{5,80}$/;

        if (!nameRegex.test(nameValue)) {
            event.preventDefault();
            alert("Please enter a valid name (3 to 40 letters and spaces only).");
            nameInput.focus();
            return;
        }

        if (!emailRegex.test(emailValue)) {
            event.preventDefault();
            alert("Please enter a valid email address.");
            emailInput.focus();
            return;
        }

        if (!subjectRegex.test(subjectValue)) {
            event.preventDefault();
            alert("Subject must be 5 to 80 characters.");
            subjectInput.focus();
            return;
        }

        if (messageValue.length < 10 || messageValue.length > 500) {
            event.preventDefault();
            alert("Message must be between 10 and 500 characters.");
            messageInput.focus();
            return;
        }

        // Demo success state when there is no backend endpoint
        event.preventDefault();
        alert("Thank you! Your message has been validated and sent successfully.");
        contactForm.reset();
    });
}