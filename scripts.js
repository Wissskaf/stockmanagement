document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('errorMessage');

    if (username === 'wiss' && password === 'wiss') {
        window.location.href = 'https://skaffinventory.netlify.app/dashboard';    } else {
        errorMessage.textContent = 'Invalid username or password';
    }
});
