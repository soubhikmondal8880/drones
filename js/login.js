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


});
