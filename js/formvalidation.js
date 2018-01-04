// formValidation function will retrieve document elements into variables that can then
// be used to populate the placeholder communication.

function formValidation()
{

	// Retrieve values for each of the fields
	
	var rName = document.getElementById("rName").value;
	var oName = document.getElementById("oName").value;
	var eDate = document.getElementById("eDate").value;
	var wURL = document.getElementById("wURL").value;
	var hName = document.getElementById("hName").value;
	
	// Update Placeholder innerHTML based upon above variables	
	document.getElementById("recipientName").innerHTML = rName;
    document.getElementById("organizationName").innerHTML = oName;
    document.getElementById("eventDate").innerHTML = eDate;
    document.getElementById("websiteURL").innerHTML = wURL;
    document.getElementById("hostName").innerHTML = hName;
}

	