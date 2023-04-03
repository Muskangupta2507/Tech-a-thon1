var captchaInput = document.getElementById('captcha');
var captchaImage = document.getElementById('captcha-image');

// Reload the CAPTCHA image when clicked
captchaImage.addEventListener('click', function() {
  captchaImage.src = 'captcha.php?' + Date.now();
});

// Validate the CAPTCHA code on form submit
form.addEventListener('submit', function(event) {
  var captchaCode = sessionStorage.getItem('captchaCode');
  if (captchaInput.value != captchaCode) {
    event.preventDefault();
    alert('Invalid CAPTCHA code.');
  }
});

// Generate and display the CAPTCHA image
var captchaCode = Math.floor(Math.random() * 9000) + 1000;
sessionStorage.setItem('captchaCode', captchaCode);
captchaImage.src = 'captcha.php?' + Date.now();
