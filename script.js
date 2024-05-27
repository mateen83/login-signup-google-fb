

document.addEventListener('DOMContentLoaded', function () {
    var togglePasswordIcons = document.querySelectorAll('.toggle-password i');

    togglePasswordIcons.forEach(function (icon) {
        icon.addEventListener('click', function () {
            var passwordInput = this.parentElement.previousElementSibling;
            
            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                this.classList.remove('fa-eye-slash');
                this.classList.add('fa-eye');
            } else {
                passwordInput.type = 'password';
                this.classList.remove('fa-eye');
                this.classList.add('fa-eye-slash');
            }
        });
    });
});
