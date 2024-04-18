document.getElementById('login').onsubmit = function(event) {
    event.preventDefault(); // Prevent the form from submitting through the browser
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var rememberMe = document.getElementById('rememberMe').checked;

    if (username === '28301' && password === '28301') {
        let timerInterval;
        Swal.fire({
            title: 'Login successful!',
            html: 'Redirecting in <strong>3</strong> seconds.',
            timer: 3000,
            didOpen: () => {
                Swal.showLoading();
                const strong = Swal.getContent().querySelector('strong');
                let timerLeft = 3;
                timerInterval = setInterval(() => {
                    timerLeft -= 1;
                    strong.textContent = timerLeft;
                }, 1000);
            },
            willClose: () => {
                clearInterval(timerInterval);
            },
            showConfirmButton: false,
            timerProgressBar: true,
        }).then((result) => {
            // Redirect the user after the timer ends
            window.location.href = 'your-redirect-url.html'; // Replace with your desired URL
        });

        // Logic for handling "Remember Me" feature
        if (rememberMe) {
            localStorage.setItem('username', username);
        } else {
            localStorage.removeItem('username');
        }
    } else {
        Swal.fire({
            title: 'Error!',
            text: 'Invalid credentials!',
            icon: 'error',
            showConfirmButton: false,
            timer: 3000
        });
    }
};

function togglePasswordVisibility() {
    var passwordInput = document.getElementById('password');
    var toggleIcon = document.querySelector('.toggle-password');
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleIcon.classList.add('fa-eye-slash');
        toggleIcon.classList.remove('fa-eye');
    } else {
        passwordInput.type = 'password';
        toggleIcon.classList.add('fa-eye');
        toggleIcon.classList.remove('fa-eye-slash');
    }
}

window.onload = function() {
    if (localStorage.getItem('username')) {
        document.getElementById('username').value = localStorage.getItem('username');
        document.getElementById('rememberMe').checked = true;
    }
};