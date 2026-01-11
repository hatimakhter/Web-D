// password toggle (eye icon to visible or not)
function toggle(){
    let pass = document.getElementById("password");
    pass.type = pass.type == "password" ? "text" : "password";
}

// form validation 

const form = document.querySelector("form");

form.addEventListener("submit", function(e){
    e.preventDefault();   // page reload stop karne ke liye

    let firstName = document.getElementById("firstname").value.trim();
    let lastName = document.getElementById("lastname").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let dob = document.getElementById("dob").value.trim();
    let gender = document.getElementById("gender").value.trim();

    if(firstName === ""){
        alert("First name is requerid");
        return;
    }
    if(lastName === ""){
        alert("Last name is requerid");
        return;
    }
    if(email === ""){
        alert("Email id is requerid");
        return;
    }
    if(!email.includes("@")){
        alert("Enter a valid email");
        return;
    }
    if(password.length < 6){
        alert("Password must be at least 6 characters");
        return;
    }
    if(dob === ""){
        alert("Birth date is requerid");
        return;
    }
    if(gender === "Select gender"){
        alert("Please select gender");
        return;
    }

    alert("Form submittted successfully ✅")


});

