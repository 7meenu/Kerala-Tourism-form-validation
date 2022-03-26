let email = document.getElementById("email");
let error = document.getElementById("error");

let password = document.getElementById("password");
let error1 = document.getElementById("error1");

function CheckStrength() {
    let passwordVal = password.value;
    console.log(passwordVal);
    
    let strengthBadge = document.getElementById('StrengthDisp');
    // let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})')
    let mediumPassword = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))')
    let strongPassword = new RegExp('((?=.*[0-9])(?=.*[A-Z])[a-zA-Z0-9]{8,})')
    if(passwordVal == '')
    {
        lblPasswordStrength.style.backgroundColor = "white";
        lblPasswordStrength.textContent = '';
    }
    else if(strongPassword.test(passwordVal)) {
        lblPasswordStrength.style.backgroundColor = "green";
        lblPasswordStrength.textContent = 'Strong';
    } else if(mediumPassword.test(passwordVal)) {
        lblPasswordStrength.style.backgroundColor = 'blue';
        lblPasswordStrength.textContent = 'Medium';
    } else {
        lblPasswordStrength.style.backgroundColor = 'red';
        lblPasswordStrength.textContent = 'Weak';
    }
}

function validate() {
    //let regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=\\S+$).{8,}/;
    let regex = /^(?=.*[0-9])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;
    let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;

    var isValidEmail = false;
    var isValidPassword = false;
    if (regexp.test(email.value)) {
        error.innerHTML = "valid Email";
        error.style.color = "blue";
        isValidEmail = true;
        //return true;
    }
    else {
        error.innerHTML = "invalid Email";
        error.style.color = "red";
        isValidEmail = false;
        //return false;
    }
    if (regex.test(password.value)) {
        error1.innerHTML = "valid Password";
        error1.style.color = "blue";
        isValidPassword = true;
        //return true;

    }
    else {

        error1.innerHTML = "invalid Password";
        error1.style.color = "red";
        isValidPassword = false;
        //return false;
    }
    if (isValidEmail && isValidPassword)
        return true;
    else
        return false;

}