
var firstname = document.getElementById("first_name");
var lastname = document.getElementById("last_name");
var phone = document.getElementById("phone");
var email = document.getElementById("email");
var college = document.getElementById("college");
var branch = document.getElementById("course");
var year = document.getElementById("year");

const sub1 = document.getElementById('submit');
var database = firebase.database();
function check(){
    if (!firstname.checkValidity()) {
    firstname.setCustomValidity("Enter your name");
    } 
    else if(!college.checkValidity()){
    college.setCustomValidity("Enter your college name");
    } 
    else if(!branch.checkValidity()){
        branch.setCustomValidity("Enter your branch");
    }
    else if(!email.checkValidity()){
        email.setCustomValidity("Enter valid email id");
    }
    else if(!phone.checkValidity()){
        phone.setCustomValidity("Enter 10 digit mobile no.");
    }
    else{
        database.ref('/WEBINAR/'+firstname.value).set({
            name1 : firstname.value,
			name2 : lastname.value,
			phone : phone.value,
			email : email.value,
			college : college.value,
			branch : branch.value,
			year : year.value
            });
        alert("Registration Done! \n ");
        document.getElementById("register-form").submit();
        document.getElementById("register-form").reset();
        
    }
     return true;
    }
   
