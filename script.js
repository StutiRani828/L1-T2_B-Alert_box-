document.addEventListener("DOMContentLoaded", function() {
    // Get the current time
    const now = new Date();
    const hours = now.getHours();

    // Determine the greeting message based on the current time
    let greeting;
    if (hours < 12) {
        greeting = "Good morning!";
    } else if (hours < 18) {
        greeting = "Good afternoon!";
    } else {
        greeting = "Good evening!";
    }

    // Display the greeting message in an alert box
    alert(greeting);
});
