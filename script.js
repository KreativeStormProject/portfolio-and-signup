document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('signup-form');
    const createButton = document.getElementById('create-button');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm_password');
    const passwordMatchError = document.getElementById('password-match-error');
  

    form.addEventListener('input', function (event) {
      const input = event.target;
      const pattern = new RegExp(input.pattern);
      var errorMessage = document.querySelector('.error-message[data-target="' + input.name + '"]');
  
      if (pattern.test(input.value) || !input.value.trim()) {
          errorMessage.style.display = 'none';
          input.classList.remove('error-color'); 
      } else {
          errorMessage.style.display = 'block';
          input.classList.add('error-color'); 
      }
  });
  
  
    confirmPasswordInput.addEventListener('input', function () {
      if (confirmPasswordInput.value !== passwordInput.value) {
        confirmPasswordInput.classList.add('password-mismatch');
        passwordMatchError.style.display = 'block';
        createButton.disabled = true

      } else {
        confirmPasswordInput.classList.remove('password-mismatch');
        passwordMatchError.style.display = 'none';
        createButton.disabled = false
      }
    });


});

function redirectToPortfolio() {
  window.location.href = "./portfolio.html";
  return false;
}
