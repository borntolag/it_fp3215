d = document;
/* Obtain query string parameters. */
q = param();
var dvalue = "";
// var dinput = "";

var today = new Date();
var expiry = new Date(today.getTime() + 30 * 24 * 3600 * 1000); // plus 30 days

d.write('<dl>');

for (k in q)
{
	d.write('<dt>', entify(k), '</dt>');
	dvalue = "";
	dinput = document.getElementById(entify(k));
	alert(dinput);

	for (i=0; i<q[k].length; i++)
	{
		d.write('<dd>', entify(q[k][i]), '</dd>');
		dvalue = dvalue + entify(q[k][i]);
	}

	alert(dvalue);
	alert(entify(k));

	dinput.value = dvalue;
}

d.write('</dl>');

function entify(s)
/* convert unsafe characters to HTML entities */
{
	return (''+s).
	replace(/&/g, '&amp;').
	replace(/</g, '&lt;').
	replace(/"/g, '&quot;').
	replace(/>/g, '&gt;');
}

function ptq(q)
{
	/* parse the query */
	/* semicolons are nonstandard but we accept them */
	var x = q.replace(/;/g, '&').split('&'), i, name, t;
	/* q changes from string version of query to object */
	
	for (q={}, i=0; i<x.length; i++)
	{
		t = x[i].split('=', 2);
		name = unescape(t[0]);
		if (!q[name])
			q[name] = [];
		if (t.length > 1)
		{
			q[name][q[name].length] = unescape(t[1]);
		}
		/* next two lines are nonstandard */
		else
			q[name][q[name].length] = true;
	}
	return q;
}

function param() {
return ptq(location.search.substring(1).replace(/\+/g, ' '));
}

function setCookie(name, value)
{
	document.cookie=name + "=" + escape(value) + "; path=/; expires=" + expiry.toGMTString();
}
  
function storeValues(form)  
{
	setCookie("userName", form.userName.value);
	setCookie("password", form.password.value);
	setCookie("passwordVerify", form.passwordVerify.value);
	setCookie("firstName", form.firstName.value);
	setCookie("lastName", form.lastName.value);
	setCookie("email", form.email.value);
	setCookie("phoneNumber", form.phoneNumber.value);
	setCookie("signUpNewsletter", form.signUpNewsletter.value);
	setCookie("comments", form.comments.value);
	setCookie("referredBy", form.referredBy.value);	

	return true;
}