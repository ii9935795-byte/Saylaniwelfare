
// Quick Donate Button

document.addEventListener("DOMContentLoaded", function () {

    const donateButton = document.querySelector(".quick-box button");
    const amountInput = document.querySelector(".quick-box input");

    donateButton.addEventListener("click", function () {

        const amount = amountInput.value.trim();

        if (amount === "") {
            alert("Please enter donation amount.");
        } else if (isNaN(amount) || Number(amount) <= 0) {
            alert("Please enter a valid amount.");
        } else {
            alert("Thank you for your donation of Rs. " + amount);
        }

    });

});
