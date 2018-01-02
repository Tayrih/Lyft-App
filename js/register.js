$(document).ready(function() {
  var firstName = $('#first-name');
  var lastName = $('#last-name');
  var email = $('#email');
  var check = $('#check');
  var buttonNext = $('#button-register');

  var validateFirstName = false;
  var validateLastName = false;
  var validateEmail = false;
  var validateCheck = false;

  firstName.on('keyup', function(event) {
    if (firstName.val()) {
      validateFirstName = true;
      enableButton();
    } else {
      disableButton();
    }
  });

  lastName.on('keyup', function(event) {
    if (lastName.val()) {
      enableButton();
      validateLastName = true;
    } else {
      disableButton();
    }
  });

  email.on('keyup', function(event) {
    var userEmail = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;
    if (userEmail.test($(this).val())) {
      validateEmail = true;
      enableButton();
    } else {
      disableButton();
    }
  });

  check.on('click', function(event) {
    if (event.target.checked) {
      validateCheck = true;
      enableButton();
    } else {
      disableButton();
    }
  });

  function enableButton() {
    if (validateFirstName && validateLastName && validateEmail && validateCheck) {
      buttonNext.attr('disabled', false);
    }
  }

  function disableButton() {
    buttonNext.attr('disabled', 'disabled');
  }

  buttonNext.on('click', function() {
    event.preventDefault();
    window.location.href = '../views/wellcome.html';
  });
});
