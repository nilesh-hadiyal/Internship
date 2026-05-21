// Show and Hide Password

function togglePassword(inputId, iconId) {
  let passwordInput = document.getElementById(inputId);
  let eyeIcon = document.getElementById(iconId);

  if (passwordInput.type === "password") {
    passwordInput.type = "text";

    eyeIcon.classList.remove("fa-eye");
    eyeIcon.classList.add("fa-eye-slash");
  } else {
    passwordInput.type = "password";

    eyeIcon.classList.remove("fa-eye-slash");
    eyeIcon.classList.add("fa-eye");
  }
}

// Range
const range = document.getElementById("range");
const value = document.getElementById("value");

range.addEventListener("input", function () {
  value.textContent = this.value;
});

// Color
function updateColor(val) {
  document.getElementById("colorPreview").style.backgroundColor = val;
}
