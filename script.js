// JavaScript for displaying the current date in the footer
document.addEventListener("DOMContentLoaded", function () {
    const footerDate = new Date(); // Get current date
    const dateElement = document.getElementById("footer-date"); // Get the element where the date will be displayed
    if (dateElement) {
        dateElement.textContent = footerDate.toDateString(); // Set the text content to the formatted date
    }
});

// JavaScript for form validation (Contact Form)
function validateContactForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

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

    alert("Thank you for contacting us! We’ll get back to you soon.");
    return true; // Allow form submission
}

// JavaScript for form validation (Join Our Community)
function validateCommunityForm() {
    const email = document.getElementById("community-email").value.trim();

    // Check if the email field is empty
    if (email === "") {
        alert("Please enter your email address.");
        return false; // Prevent form submission
    }

    // Check for valid email format
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false; // Prevent form submission
    }

    alert("Thank you for joining our community! Look out for exclusive updates.");
    return true; // Allow form submission
}
