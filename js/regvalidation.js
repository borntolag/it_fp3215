  // form check for each of the fields will call a function to validate specific fields
  
  function checkForm(form)
  {
    // validation fails if the input is blank
    if(form.userName.value == "") {
      alert("Error: Username not specified!");
      form.userName.focus();
      return false;
    }
	
	if (!checkUsername(form.userName.value))
	{
		alert("Error: userName may only contain alphanumeric characters");
		form.userName.focus();
		return false;
	}
	
	if (!checkPassword(form.password.value)){
		alert("Error: Password must be at least 8 characters");
		form.password.focus();
		return false;
	}
	if (!comparePassword(form.password.value, form.passwordVerify.value)) {
		alert("Error Password and Password Verification must be the same");
		form.password.focus();
		return false;
	}
	// validation fails if the input is blank
    if(form.firstName.value == "") {
      alert("Error: First Name not specified!");
      form.firstName.focus();
      return false;
    }
	
	// validation fails if the input is blank
    if(form.lastName.value == "") {
      alert("Error: Last Name not specified!");
      form.lastName.focus();
      return false;
    }
	
	
	if (!validateEmail(form.email.value)) {
		alert("Error: Email address not formatted correctly.  use name@domain.com");
		form.email.focus();
		return false;
	}
	
	if (!validatePhoneNumber(form.phoneNumber.value)) {
		alert("Error: Phone Number must be in 123-456-7890 format.")
		form.phoneNumber.focus();
		return false;
	}	
	
	
	// validation was successful
	alert("Form processed succesfully");
    return true;
  }

  // Check for Blank Field
  function checkForBlank(str)
  {
	  if (str.length == 0)
	  {
		return false;
	  }
	  else
	  {
		  return true;
	  }
  }
  // Check UserName to only have alphanumberic characters 
  function checkUsername(str)
  {
	var re = /^([a-zA-Z0-9]+)$/
    return re.test(str);
  }
  
// Validate Password is at least 8 characters long
function checkPassword(str)
{
	if (str.length >= 8)
	  return true
	else
	  return false
}
  
// validate that passwords match
function comparePassword(str1, str2)
{
  	if (str1 == str2)
  		return true
  	else
  		return false
}
  
// validate that email is in proper format for email address
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email.toLowerCase());
}
//validate phone number correct per US Standards
function validatePhoneNumber(elementValue){
	var phoneNumberPattern = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
	return phoneNumberPattern.test(elementValue);
}