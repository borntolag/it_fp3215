// formValidation function will retrieve document elements into variables that can then
// be used to populate the placeholder communication.


// function to create additional Recipients to specified div id

function createRecipentNameInputs(divName)
{
	numInvites = document.getElementById("numR").value;
	

    // Container <div> where dynamic content will be placed
    var container = document.getElementById(divName);
    // Clear previous contents of the container
    while (container.hasChildNodes()) {
        container.removeChild(container.lastChild); }
	
	// loop to insert additonal names for input
	for (var i=0; i<numInvites; i++)
	{
		// create new div element
		var newdiv = document.createElement('div');
		// add new input box for next recipient
		newdiv.innerHTML = "<div id='invitees' <br/> <label for='recipientName[]'>Recipient name:</label> " +
            "<input class='volunteers'  type='text' name='recipientName[]' placeholder='Enter your Recipient Name' id='rName[]' /> <br/> </div>";
		// add new child div to specified parent div element
		document.getElementById(divName).appendChild(newdiv);
		
	}
}
			
// function to print out invititations

// function to create additional Recipients to specified div id

function displayInvitations(articleName)
{
	numInvites = document.getElementById("numR").value;
	var oName = document.getElementById("oName").value;
	var eDate = document.getElementById("eDate").value;
	var wURL = document.getElementById("wURL").value;
	var hName = document.getElementById("hName").value;
	
	var iNames = [];
		var x = document.getElementsByClassName("volunteers");
	
	for (var i=0; i<numInvites; i++)
	{	
			iNames[i] = x[i].value;
	}
	
	
	// loop to insert additonal names for input
	for (var i=0; i<numInvites; i++)
	{
		// create new div element
		var newdiv = document.createElement('article');
		// add new input box for next recipient
		
		newdiv.innerHTML = "Hello " + iNames[i] + "<br/> <br/>" +
						   "You have been invited to volunteer for an event held by " + oName +
						   " on " + eDate + ".  Please come to the following website: " + wURL +
						   " to sign up as a volunteer.  <br/> <br/> Thanks! <br/> <br/> " + hName;
		// add new child div to specified parent div element
		document.getElementById(articleName).appendChild(newdiv);
		
	}
}
	