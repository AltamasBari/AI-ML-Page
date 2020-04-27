(function($) {

  $('#reset').on('click', function(){
      $('#register-form').reset();
  });
	
var firstname = document.getElementById("first_name")
		var lastname = document.getElementById("last_name")
		var phone = document.getElementById("phone")
		var email = document.getElementById("email")
		var college = document.getElementById("college")
		var branch = document.getElementById("course")
		var year = document.getElementById("year")

const sub1 = document.getElementById('submit');


const database = firebase.database();
const rootref1 = database.ref('Webinar');
sub1.addEventListener('click',(e)=>{
	e.preventDefault();
	var numbers = /^[0-9]+$/;
	if(!phone.value.match(numbers) && String(phone.value).length)
	{
		window.alert("enter correct phone");
	}
	else if (firstname.value!="" && lastname.value!="" && phone.value!="" && email.value!="" && college.value!="" && branch.value!="" && year.value!="")
	{
		console.log(typeof phone.value);
		console.log(String(phone.value).length);
		const autoid1 = rootref1.push().key
	rootref1.child(autoid1).set({
		
			name1 : firstname.value,
			name2 : lastname.value,
			phone : phone.value,
			email : email.value,
			college : college.value,
			branch : branch.value,
			year : year.value
	});
	window.alert("Click Ok to complete registration.");
	}
	else
	{
		window.alert("Fill all the details.")
	}

});

})(jQuery);