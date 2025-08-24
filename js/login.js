$(document).ready(function () {
  // Toggle Password Visibility
  $(".toggle-password").on("click", function () {
    const target = $(this).data("target");
    const input = $("#" + target);

    if (input.attr("type") === "password") {
      input.attr("type", "text");
      $(this).text("👁"); // eye open
    } else {
      input.attr("type", "password");
      $(this).text("⌣"); // eye closed
    }
  });

  // Handle Form Submission
  $("#loginForm").on("submit", function (e) {
    e.preventDefault();

    let email = $("#email").val().trim();
    let password = $("#password").val().trim();
    let isValid = true;

    // Reset messages
    $(".error-message").text("");
    $("#successMessage").hide();

    // Email validation
    if (email === "") {
      $("#emailError").text("Email is required");
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      $("#emailError").text("Enter a valid email address");
      isValid = false;
    }

    // Password validation
    if (password === "") {
      $("#passwordError").text("Password is required");
      isValid = false;
    } else if (password.length < 6) {
      $("#passwordError").text("Password must be at least 6 characters");
      isValid = false;
    }

    // If valid -> Show Success
    if (isValid) {
      $("#successMessage")
        .text(" Login successful! Redirecting...")
        .css("color", "#00ff99")
        .fadeIn();

      // Redirect after 1.4 seconds
      setTimeout(() => {
        window.location.href = "../checkout.html"; //login page
      }, 1400);
    }
  });
});
