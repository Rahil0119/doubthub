const loginForm = document.getElementById("loginForm");
const messageDiv = document.getElementById("message");


const validUsername = "doubthub";
const validPassword = "admin";

loginForm.addEventListener("submit", function(event) {
    event.preventDefault(); 

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username === validUsername && password === validPassword) {
        messageDiv.style.color = "green";
        messageDiv.textContent = "Login successful!";
        setTimeout(() => {
            window.location.href = "index.html"; 
        }, 1000);
    } else {
        messageDiv.textContent = "Invalid username or password.";
    }
});

