var u = "Student";
var p = "Password";

function LogIn() {

    let uinput = document.getElementById("userN").value.trim();
    let pinput = document.getElementById("passW").value.trim();

    if (uinput === u && pinput === p) {

        document.getElementById("result").innerHTML =
        "Welcome back, Student! :D";

        setTimeout(() => {
            window.location.href = "./dashboard.html";
        }, 500);
    }

    else {

        document.getElementById("result").innerHTML =
        "WRONG!";
    }
}
