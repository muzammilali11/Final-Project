function validateForm() {
  // Get the values from the form
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Simple validation
  if (username.trim() === "") {
    alert("Please enter your username.");
    return false;
  }

  if (password.trim() === "") {
    alert("Please enter your password.");
    return false;
  }

  // If all validation passes, form submission is allowed
  document.getElementById("successMessage").style.display = "block";
  return true;
}

function togglePasswordVisibility() {
  var passwordInput = document.getElementById("password");
  var toggleButton = document.querySelector(".togglePassword");
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    toggleButton.innerHTML = '<i class="fa-solid fa-eye"></i>';
  } else {
    passwordInput.type = "password";
    toggleButton.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';
  }
}
document.addEventListener("DOMContentLoaded", function () {
  var addToCartButtons = document.querySelectorAll(".add-to-cart");
  addToCartButtons.forEach(function (button) {
    button.addEventListener("click", function (event) {

      var productName = button.dataset.name;
      var productPrice = parseFloat(button.dataset.price);

      // Add the product to the cart (simulated by logging)
      console.log("Product added to cart:");
      console.log("Name: " + productName);
      console.log("Price: $" + productPrice.toFixed(2));

      // Display a message confirming the addition to the cart
      showMessage("Your order for " + productName + " has been added.");
    });
  });

  // Function to display a message
  function showMessage(message) {
    var messageElement = document.getElementById("message");
    messageElement.textContent = message;
    messageElement.style.display = "block";

    // Hide the message after 3 seconds
    setTimeout(function () {
      messageElement.style.display = "none";
    }, 3000);
  }
});
