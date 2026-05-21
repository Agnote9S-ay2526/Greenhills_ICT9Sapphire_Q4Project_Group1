var u, p;

u = "Student";
p = "Password";

function LogIn() {

    let uinput = document.getElementById("userN").value;
    let pinput = document.getElementById("passW").value;

    if (u === uinput && p === pinput) {

        document.getElementById("result").innerHTML =
        "Welcome back, Student! :D";

        window.location.href = "dashboard.html";
    }

    else {

        document.getElementById("result").innerHTML =
        "WRONG!";
    }
}
