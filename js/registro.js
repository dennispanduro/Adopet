document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('registro-form');

  form.addEventListener('submit', function (event) {
    event.preventDefault(); // Evita que se recargue la página

    const name = document.getElementById('name').value.trim();
    const lastname = document.getElementById('lastname').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();

    if (!name || !lastname || !email || !phone) {
      alert('Por favor completa todos los campos.');
    } else {
      alert('¡Registro exitoso!');
      form.reset(); // Limpia el formulario
    }
  });
});