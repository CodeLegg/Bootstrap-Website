    document.getElementById("signup-form").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the default form submission behavior

        // Hide the form
        document.getElementById("signup-form").style.display = "none";

        // Display the thank you message
        document.getElementById("thank-you").style.display = "block";

        // Clear form inputs
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("age").value = "";
        document.getElementById("membership-type").selectedIndex = 0;
        document.getElementById("location").selectedIndex = 0;
        document.getElementById("gym-package").selectedIndex = 0;
        document.getElementById("subscription-type").selectedIndex = 0;
        document.getElementById("card-number").value = "";
        document.getElementById("expiration-date").value = "";
        document.getElementById("cvv").value = "";
    });