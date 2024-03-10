document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('res');
    button.onclick = function(event) {
        event.preventDefault();

        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const passwordMatchMessage = document.getElementById('passwordMatchMessage');

        if (password === confirmPassword) {
            passwordMatchMessage.textContent = 'Las contraseñas coinciden.';
            passwordMatchMessage.style.color = 'green';
        } else {
            passwordMatchMessage.textContent = 'Las contraseñas no coinciden.';
            passwordMatchMessage.style.color = 'red';
        }
    }
})

function changeTitleStyle(element) {
    element.classList.add('changed-title-style');
}
    
function showHelp(field) {
    let helpMessage;
    if (field === 'password') {
        helpMessage = 'La contraseña debe tener al menos 8 caracteres, incluir una mayúscula, un número y un carácter especial.';
        document.getElementById('passwordHelp').textContent = helpMessage;
    } else if (field === 'confirmPassword') {
        helpMessage = 'Vuelve a introducir tu contraseña para verificar.';
        document.getElementById('confirmPasswordHelp').textContent = helpMessage;
    }
}