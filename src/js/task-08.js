const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', event => {
  event.preventDefault();

  const emailInput = loginForm.elements.email;
  const passwordInput = loginForm.elements.password;

  if (!emailInput.value.trim() || !passwordInput.value.trim()) {
    alert('Por favor rellena todos los campos.');
    return;
  }

  const formData = {
    [emailInput.name]: emailInput.value,
    [passwordInput.name]: passwordInput.value,
  };

  console.log(formData);

  loginForm.reset();
});
