$(document).ready(function () {
  $("#sendLink").on("click", function (e) {
    e.preventDefault(); // prevent anchor from jumping

    let email = $("#email").val().trim();
    let emailError = $("#emailError");
    let successMessage = $("#successMessage");
    let valid = true;

    emailError.text("");
    successMessage.hide();

    // Email validation
    if (email === "") {
      emailError.text("Please enter your email address.");
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      emailError.text("Please enter a valid email address.");
      valid = false;
    }

    if (valid) {
      successMessage
        .text(" A password reset link has been sent to your registered email address.")
        .css({
          "color": "#7f8d7fff",
          "font-weight": "600",
          "margin-top": "10px",
        })
        .fadeIn();

      // Simulate redirect after success
      setTimeout(() => {
        window.location.href = "./otp.html";
      }, 2000);

      $("#email").val(""); // clear input
    }
  });
});
