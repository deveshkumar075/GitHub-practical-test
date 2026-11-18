
// Select the button and message element

const helloButton = document.getElementById("helloButton");

const message = document.getElementById("message");


// Add click event to the button

helloButton.addEventListener("click", function() {

    message.textContent = "Hello! Thanks for visiting my portfolio.";

});

