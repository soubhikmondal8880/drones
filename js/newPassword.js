$(document).ready(function () {
  // Toggle Password Visibility
  $(".toggle").click(function () {
    const targetId = $(this).data("target");
    const input = $("#" + targetId);

    if (input.attr("type") === "password") {
      input.attr("type", "text");
      $(this).text("👁");
    } else {
      input.attr("type", "password");
      $(this).text("⌣");
    }
  });

  // Save Button Click
  $("#savePassword").click(function (e) {
    e.preventDefault();
    const password = $("#password").val().trim();
    const confirmPassword = $("#confirmPassword").val().trim();

    let valid = true;

    if (password.length < 6) {
      $("#passwordError").text("Password must be at least 6 characters");
      valid = false;
    } else {
      $("#passwordError").text("");
    }

    if (password !== confirmPassword) {
      $("#confirmError").text("Passwords do not match");
      valid = false;
    } else {
      $("#confirmError").text("");
    }

    if (valid) {
      $("#successMessage").css("color", "limegreen").text("  Password saved successfully!");
      $("#password, #confirmPassword").val("");

      // Redirect after 3 seconds
      setTimeout(function () {
        window.location.href = "login.html"; // Change to your login page
      }, 3000);
    }
  });
});
