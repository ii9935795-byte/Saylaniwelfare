
// Navbar menu button
let menuToggle = document.getElementById("menuToggle");

// Navbar links
let navLinks = document.getElementById("navLinks");

// Button click event
menuToggle.addEventListener("click", function() {

    // Menu open / close
    navLinks.classList.toggle("active");

});
// Get appeals container

let container = document.getElementById("appealsContainer");

// Get buttons

let nextBtn = document.getElementById("nextBtn");

let previousBtn = document.getElementById("previousBtn");


// Next button

nextBtn.addEventListener("click", function() {

    container.scrollBy({
        left: container.clientWidth + 15,
        behavior: "smooth"
    });

});


// Previous button

previousBtn.addEventListener("click", function() {

    container.scrollBy({
        left: -(container.clientWidth + 15),
        behavior: "smooth"
    });

});

