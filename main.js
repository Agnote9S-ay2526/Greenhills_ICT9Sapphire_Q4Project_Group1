var u = "Student";
var p = "Password";

function login() {

    let usernameInput = document.getElementById("username").value;
    let passwordInput = document.getElementById("password").value;

    if (usernameInput === "uinput" && passwordInput === "pinput") {
        alert("Welcome, Student!");
    }

    else{
        alert("Incorrect username or password.");
    }

}
