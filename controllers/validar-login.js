// Obtener el formulario y los elementos de entrada
const form = document.querySelector('.login');
const emailInput = form.querySelector('input[name="email"]');
const passwordInput = form.querySelector('input[name="password"]');

// Agregar un evento de envío al formulario
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Evitar que el formulario se envíe automáticamente

  // Validar los campos de entrada
  if (validateEmail(emailInput.value) && validatePassword(passwordInput.value)) {
    // Los campos son válidos, realizar la acción deseada
    // Por ejemplo, redirigir al usuario a una página de inicio de sesión exitosa
    window.location.href = 'productos.html';
  } else {
    // Mostrar un mensaje de error
    alert('Credenciales inválidas. Por favor, verifique su correo electrónico y contraseña.');
  }
});

// Función para validar el formato de correo electrónico
function validateEmail(email) {
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return emailRegex.test(email);
}

// Función para validar la contraseña
function validatePassword(password) {
  // Aquí puedes agregar tus propias reglas de validación para la contraseña
  // Por ejemplo, mínimo 6 caracteres, al menos una letra mayúscula y un número, etc.
  return password.length >= 6;
}