$(document).ready(function () {
  const boxes = $(".box");
  const otpError = $("#otpError");
  const successMessage = $("#successMessage");
  const verifyBtn = $("#verifyOtp");

  // Prefill email if saved by the forgot page
  const saved = sessionStorage.getItem("recoveryEmail");
  if (saved) $("#userEmail").text(saved);

  // Only digits, auto-advance/backspace
  boxes.on("input", function () {
    this.value = this.value.replace(/\D/g, "").slice(0, 1);
    if (this.value && this.nextElementSibling) this.nextElementSibling.focus();
    toggleVerifyState();
  });

  boxes.on("keydown", function (e) {
    if (e.key === "Backspace" && !this.value && this.previousElementSibling) {
      this.previousElementSibling.focus();
    }
  });

  // Enable/disable Verify based on completeness
  function toggleVerifyState() {
    const filled = [...boxes].every(b => b.value.trim().length === 1);
    verifyBtn.attr("aria-disabled", filled ? "false" : "true");
  }

  // Verify click
  $("#verifyOtp").on("click", function (e) {
    e.preventDefault();
    if (verifyBtn.attr("aria-disabled") === "true") return;

    otpError.text("");
    successMessage.hide();

    // Collect 4-digit OTP
    let otp = "";
    boxes.each(function () { otp += $(this).val().trim(); });

    // ----- Replace this with your real API call -----
    // Demo success only if "1234"
    const isValid = otp === "1234";
    // ------------------------------------------------

    if (isValid) {
      successMessage
        .text("OTP verified successfully. Redirecting…")
        .fadeIn();

      // Clear and redirect
      boxes.val("");
      setTimeout(() => window.location.href = "../newPassword.html", 1500);
    } else {
      otpError.text("Invalid OTP. Please try again.");
      boxes.val("");
      boxes.first().focus();
      toggleVerifyState();
    }
  });

  // Resend (simulated)
  $("#resendOtp").on("click", function (e) {
    e.preventDefault();
    otpError.text("");
    successMessage
      .text("A new OTP has been sent to your email.")
      .fadeIn()
      .delay(1200)
      .fadeOut();
  });

  // Init
  boxes.first().focus();
  toggleVerifyState();
});
