var form = document.forms["signUpForm"];//gettng form called signUpForm
$("i").hide();
//validating first name
function validFName(input){
    var name = input.value;
    if (name.length==0) {
        input.placeholder=" ";
        $("i")[0].style.display="";
        setError(ffname,"First Name cannot be empty");
        return false;
    }
    var check =/^[a-zA-Z]+$/;
    if (check.test(name)) return true;
    else {
        $("i")[0].style.display="";
        setError(ffname,"First Name can only contain Alphabets");
        return false;
    }
}

// validating last name
function validLName(input){
    var name = input.value;
    if (name.length==0) {
        $("i")[1].style.display="";
        input.placeholder=" ";
        setError(flname,"Last Name cannot be empty");
        return false;
    }
    var check =/^[a-zA-Z]+$/;
    if (check.test(name)) return true;
    else {
        $("i")[1].style.display="";
        setError(flname,"Last Name can only contain Alphabets");
        return false;
    }
}

// validating email
function validEmail(input){
    var email= input.value;
    var check = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/; 
    if (check.test(email)) return true;
    else {
        $("i")[2].style.display="";
        $("#email").addClass("e-placeholder")
        input.placeholder="email@example.com";
        setError(femail,"looks like this is not an email");
        return false;
    }
}

// validating password
function validPass(input){
    var pass=input.value;
    if (pass.length==0) {        
        $("i")[3].style.display="";
        input.placeholder=" ";
        setError(fpass,"Password cannot be empty");
        return false;
    }
    var check=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if (pass.match(check)) return true;
    else {
        $("i")[3].style.display="";
        setError(fpass,"Password must contain 1 lowercase 1 uppercase and 1 Number");
        return false;
    }
}

// setting error messages
function setError(id,error){
    $(id).text(error);
}

// clearing earlier errrors
function clr(){
    $(".errors").text("");
    $("i").hide();
}
// main function to validate form 
function validate(){
    clr();
    
    $("#email").removeClass("e-placeholder");

    var check = true;
    if (!validFName(form["fname"])){
        check = false;
    }
    if (!validLName(form["lname"])){
        check = false;
    }
    if (!validEmail(form["email"])){
        check = false;
    }
    if (!validPass(form["pass"])){
        check = false;
    }
        
    return check;
}
