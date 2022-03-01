console.log("This is project 4");

let userName = document.getElementById("userName");
let email = document.getElementById("email");
let phone = document.getElementById("phone");


let userNameIsValid = false;
let eamilIsValid = false;
let phoneIsValid = false;
let submitBtn = document.getElementById("submitBtn");

checkUserName = function(){
    let regex = /^[a-zA-Z]([a-zA-Z0-9\s]){0,14}$/;
    let str = userName.value;
    if(regex.test(str)){
        console.log("Valid User Name");
        userNameIsValid = true;
        
        userName.classList.add("is-valid");
        userName.classList.remove("is-invalid");
    }
    else{
        console.log("Invalid User Name");
        userNameIsValid = false;
        
        userName.classList.add("is-invalid");
        userName.classList.remove("is-valid");
    }
}

userName.addEventListener("blur",checkUserName);
userName.addEventListener("input",checkUserName);

checkEmail = ()=>{
    let regex = /^([a-zA-Z0-9\.\-_]+)@([a-zA-Z0-9\.\-_]+)\.([a-zA-Z0-9]){2,7}$/;
    let str = email.value;
    if(regex.test(str)){
        console.log("Valid Email");
        eamilIsValid = true;
        email.classList.add("is-valid");
        email.classList.remove("is-invalid");
    }
    else{
        console.log("Invalid Email");
        eamilIsValid = false;
        
        email.classList.add("is-invalid");
        email.classList.remove("is-valid");
    }
}
email.addEventListener("blur",checkEmail);
email.addEventListener("input",checkEmail);


checkPhone = ()=>{
    let regex = /^([0-9]){11}$/;
    let str = phone.value;
    if(regex.test(str)){
        // console.log("Valid phone");
        phoneIsValid = true;
        phone.classList.add("is-valid");
        phone.classList.remove("is-invalid");
    }
    else{
        // console.log("Invalid phone");
        phoneIsValid = false;
        phone.classList.add("is-invalid");
        phone.classList.remove("is-valid");

    }
}


phone.addEventListener("blur",checkPhone);
phone.addEventListener("input",checkPhone);

submitBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    console.log("Submitted");
    let successAlertMessage = `
            <div class="alert alert-success alert-dismissible fade show" role="alert">
                <strong>Congratulations!</strong> Your Form has been successfully submitted.
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
    `;
    let failureAlertMessage = `
        <div class="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>Sorry!</strong> Failed to submit the form.Either invalid username or invalid email or invalid phone
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    `;
    let submissionAlert = document.getElementById("submissionAlert");
    if(userNameIsValid && eamilIsValid &&phoneIsValid){
        // console.log("Form submitted successfully");
        submissionAlert.innerHTML = successAlertMessage;
    }
    else{
        console.log("Form not submitted successfully");
        submissionAlert.innerHTML = failureAlertMessage;
    }
})