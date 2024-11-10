// JavaScript for displaying the current date in the footer
document.addEventListener("DOMContentLoaded", function () {
    const footerDate = new Date(); // Get current date
    const dateElement = document.getElementById("footer-date"); // Get the element where the date will be displayed
    if (dateElement) {
        dateElement.textContent = footerDate.toDateString(); // Set the text content to the formatted date
    }
});

// JavaScript for form validation
function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Check if any of the fields are empty
    if (name === "" || email === "" || message === "") {
        alert("All fields must be filled out!");
        return false; // Prevent form submission
    }

    // Check for valid email format
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false; // Prevent form submission
    }

    alert("Form submitted successfully!");
    return true; // Allow form submission
}

