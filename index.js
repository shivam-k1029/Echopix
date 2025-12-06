document.addEventListener("DOMContentLoaded", function () {

    let emailInput = document.getElementById("loginform");
    let passInput = document.getElementById("passwordform");
    let loginBtn = document.getElementById("login");
    let errorBox = document.createElement("p");

    errorBox.style.color = "red";
    errorBox.style.fontSize = "14px";
    errorBox.style.marginTop = "5px";

    passInput.parentNode.appendChild(errorBox);

    loginBtn.addEventListener("click", function () {

        let email = emailInput.value.trim();
        let password = passInput.value.trim();

        if(email === "shivam_kr" && password === "12345") {
            window.location.href = "mainpage.html";
            return;
        }

        if (email === "" || password === "") {
            errorBox.textContent = "Please enter email/phone and password.";
            return;
        }

    
        if (email !== "test@gmail.com" || password !== "12345") {
            errorBox.textContent = "Wrong email or password!";
            return;
        }

        window.location.href = "mainpage.html";
    });
});
