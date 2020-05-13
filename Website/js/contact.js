"use strict";
var byId = function(id) { return document.getElementById(id); };

var processEntries = function() {
	var isValid = true;
	
	// get values for user entries
	var fullname = byId("full_name").value;
	var email = byId("email_address").value;
	var phone = byId("phone").value;
	var country = byId("country").value;
	var contact = "Email";
	if (byId("phone_pref").checked) { contact = "Phone"; }

		// check user entries for validity
		if (fullname == "") {
				byId("full_name").nextElementSibling.firstChild.nodeValue = "This field is required.";
		isValid = false;
		}
		else {
			byId("full_name").nextElementSibling.firstChild.nodeValue = "";//removes the asterisk when valid
		}
		if (email == "") {
			byId("email_address").nextElementSibling.firstChild.nodeValue = "This field is required.";
		isValid = false;
		}
		else {
			byId("email_address").nextElementSibling.firstChild.nodeValue = "";//removes the asterisk when valid
		}
		if (phone == "") {
			byId("phone").nextElementSibling.firstChild.nodeValue = "This field is required.";
		isValid = false;
		}
		else {
			byId("phone").nextElementSibling.firstChild.nodeValue = "";
		}
		if (country == "") {
			byId("country").nextElementSibling.firstChild.nodeValue = "Please select a country.";
		isValid = false;
		}
		else {
			byId("country").nextElementSibling.firstChild.nodeValue = "";
		}
	if (isValid == true) {
		byId("contact_form").submit();
	}
};

var resetForm = function() {
	byId("contact_form").reset();
	byId("full_name").nextElementSibling.firstChild.nodeValue = "*";
	byId("email_address").nextElementSibling.firstChild.nodeValue = "*";
	byId("phone").nextElementSibling.firstChild.nodeValue = "*";
	byId("country").nextElementSibling.firstChild.nodeValue = "*";
	byId("full_name").focus();
};

window.onload = function() {
	byId("submit_form").onclick = processEntries;
	byId("reset_form").onclick = resetForm;
	byId("full_name").focus();
};