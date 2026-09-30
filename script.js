
function register() {

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    alert("Registration successful!")
    window.location.href = "budget.html";
}


function login() {

    let username = document.getElementById("loginUsername").value;
    let password = document.getElementById("loginPassword").value;

    let savedUsername = localStorage.getItem("username");
    let savedPassword = localStorage.getItem("password");

    if (username === savedUsername && password === savedPassword) {
        window.location.href = "budget.html";
    } else {
        alert("Invalid credentials")
    }
}


function calculateBudget() {

    let income = Number(document.getElementById("income").value);
    let rent = Number(document.getElementById("rent").value);
    let groceries = Number(document.getElementById("groceries").value);
    let transportation = Number(document.getElementById("transportation").value);
    let entertainment = Number(document.getElementById("entertainment").value);
    let other = Number(document.getElementById("other").value);

    let totalExpenses =
        rent + groceries + transportation + entertainment + other;

    let balance = income - totalExpenses;

    if (balance >= 0) {
        document.getElementById("result").innerHTML =
            `<div class="alert alert-success">
                You have saved ₹${balance}.
            </div>`;
    } else {
        document.getElementById("result").innerHTML =
            `<div class="alert alert-danger">
                You have overspent by ₹${Math.abs(balance)}.
            </div>`;
    }
}

function logout() {
    window.location.href = "login.html";
}

