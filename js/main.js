
const firstname = document.getElementById("first_name");
var lastname = document.getElementById("last_name");
var phone = document.getElementById("phone");
const email = document.getElementById("email");
var college = document.getElementById("college");
var branch = document.getElementById("course");
var year = document.getElementById("year");

const sub1 = document.getElementById('submit');
var database = firebase.database();

function check(){
   /* if (!firstname.checkValidity()) {
    firstname.setCustomValidity("Enter your name");
        
    } */

    var x=0;
    if (firstname.value == "") {
    firstname.setCustomValidity("Enter your name");
    }
    else{firstname.setCustomValidity("");
        x++;
        }
    if(phone.value.match(/^\d{10}$/)){
        phone.setCustomValidity("");
        x++;
    }
    else{phone.setCustomValidity("Enter 10 digit mobile no.");
        }
    
    if(branch.value == ""){
        branch.setCustomValidity("Enter your branch");
    }
    else{branch.setCustomValidity("");
        x++;
        }
    
     if(college.value == ""){
    college.setCustomValidity("Enter your college name");
    } 
    else{college.setCustomValidity("");
        x++;
        }
     if(email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
        email.setCustomValidity("");
        x++;
    }
    else{email.setCustomValidity("Enter valid email id");
        }
    
    if(x == 5){
        database.ref('/WEBINAR').push().set({
            name1 : firstname.value,
			name2 : lastname.value,
			phone : phone.value,
			email : email.value,
			college : college.value,
			branch : branch.value,
			feedback : year.value
            });
        alert("Thanks for participating. Have a good day!! ");
        
            document.getElementById("register-form").submit();
            document.getElementById("register-form").reset();
        
        
    }
     return true;
    }
   
