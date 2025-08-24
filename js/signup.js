
$(document).ready(function () {

  // Form Validation + Success Logic

  $("#signupForm").on("submit", function (e) {
    e.preventDefault();

    let email = $("#email").val().trim();
    let password = $("#password").val();
    let confirmPassword = $("#confirmPassword").val();

    let isValid = true;

    // Reset messages
    $(".error-message").hide().text("");
    $("#successMessage").hide();

    // Email validation
    if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(email)) {
      $("#emailError")
        .text("Please enter a valid Gmail address (example@gmail.com)")
        .show();
      isValid = false;
    }

    // Password match validation
    if (password !== confirmPassword) {
      $("#confirmPasswordError")
        .text("Passwords do not match")
        .show();
      isValid = false;
    }

    // Final submission
    if (isValid) {
      // Show success message
      $("#successMessage")
        .text(" Form submitted successfully!")
        .fadeIn(400);

      // Clear inputs
      $("#signupForm")[0].reset();

      // Hide message after 5 seconds
      setTimeout(function () {
        $("#successMessage").fadeOut(400);
      }, 5000);
    }
  });

  // Toggle Password Visibility

  $(".toggle-password").on("click", function () {
    let targetId = $(this).data("target");
    let input = $("#" + targetId);

    if (input.attr("type") === "password") {
      input.attr("type", "text");
      $(this).text("👁"); // show password
    } else {
      input.attr("type", "password");
      $(this).text("⌣"); // hide password
    }
  });
});

