// Seleciona todos os campos do formulário
const inputs = this.form.querySelectorAll('input, textarea, select');

// Percorre todos os campos do formulário
inputs.forEach(input => {
    // Remove estados anteriores
    input.classList.remove('is-invalid', 'is-valid');

    // Verifica se o campo é válido
    if (input.checkValidity()) {
        input.classList.add('is-valid');
    } else {
        input.classList.add('is-invalid');
    }
});
