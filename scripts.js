/* Add your JavaScript to this file */
  document.addEventListener('DOMContentLoaded', function () {
    // Get the form and the message div
    var form = document.querySelector('.newsletter form');
    var messager = document.querySelector('.newsletter .message');

    // Add a submit event listener to the form
    form.addEventListener('submit', function (event) {
      // Prevent the default form submission
      event.preventDefault();

      // Get the email input value
      var emailInput = document.querySelector('.newsletter form input[name="email"]');
      var email = emailInput.value.trim(); // Trim removes leading and trailing whitespaces

      // Check if the email is not empty
      if (email !== '') {
        // Display the success message
        messager.innerHTML = 'Thank you! Your email address <strong>' + email + '</strong> has been added to our mailing list!';
      } else {
        // Display the error message
        messager.innerHTML = 'Please enter a valid email address.';
      }
    });
  });

