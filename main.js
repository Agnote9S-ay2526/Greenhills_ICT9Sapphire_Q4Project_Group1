var u, p
u = "Student";
p = "Password";

function LogIn() {
    let uinput = document.getElementById("userN").value;
    let pinput = document.getElementById("passW").value;

    if (u === uinput && p === pinput) {
        r = "Welcome back, Student! :D";
        
    } else {
        r = "WRONG!";
        
    }
    document.getElementById("result").innerHTML = r;
}
