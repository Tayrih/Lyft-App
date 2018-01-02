$(document).ready(function() {
	 setTimeout(function() {
	 $('#splash-screen').fadeOut(1500);
  }, 5000);

  var phone = $('#phone');
  var buttonNext = $('#button-next');

  phone.keyup(function() {
    var valueNumber = $(this).val();

    if (valueNumber.length === 10) {
      buttonNext.attr('disabled', false);
    } else {
      buttonNext.attr('disabled', 'disabled');
    }
  });

  buttonNext.on('click', function(event) {
		 event.preventDefault();
		 var numberRandom = Math.floor(Math.random() * 1001);
	  var code = 'LAB-' + numberRandom;
    alert('Tu código es : ' + code);
    localStorage.codePhone = numberRandom;
    window.location.href = '../views/verify.html';
  });

 	var codePhone = $('#code-phone');
  var buttonNextVerify = $('#button-next-verify');
  var resend = $('#resend');

  resend.on('click', function(event) {
    event.preventDefault();
    var numberRandom = Math.floor(Math.random() * 1001);
    var code = 'LAB-' + numberRandom;
    alert('Tu código es : ' + code);
    localStorage.codePhone = numberRandom;
  });

  codePhone.on('keyup', function() {
    var value = $(this).val();

    if (value === localStorage.codePhone) {
      buttonNextVerify.attr('disabled', false);
    } else {
      buttonNextVerify.attr('disabled', 'disabled');
    }
  });

  buttonNextVerify.on('click', function() {
    window.location.href = '../views/register.html';
  });
});
