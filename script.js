window.onload = function() {
  // Only show if consent not given
  if (!localStorage.getItem("cookie_consent")) {
    document.getElementById("cookieConsent").style.display = "flex";
  }
  // Accept button click
  document.getElementById("acceptBtn").onclick = function() {
    localStorage.setItem("cookie_consent", "true");
    document.getElementById("cookieConsent").style.display = "none";
  };
  // Close button click
  document.getElementById("closeBtn").onclick = function() {
    document.getElementById("cookieConsent").style.display = "none";
  };
};
