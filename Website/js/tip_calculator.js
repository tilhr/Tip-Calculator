"use strict";
var byId = function(id) {
    return document.getElementById(id);
};

var calculateTip = function(bill_amount, tip_percentage) {
    // calculate tip amount
    var tipAmount;
    var tip_percentage = ".15";
    if (byId("ten_percent").checked) { tip_percentage = ".10"; }
    if (byId("eighteen_percent").checked) { tip_percentage = ".18"; }
    if (byId("twenty_percent").checked) { tip_percentage = ".20"; }
    if (byId("twentyfive_percent").checked) { tip_percentage = ".25"; }
    tipAmount = bill_amount;
    tipAmount = tipAmount * tip_percentage;
    /* for (var i = 1; i <= years; i++ ) {
        futureValue = futureValue + (futureValue * annual_rate / 100);
    } */
    tipAmount = parseFloat(tipAmount);
    tipAmount = tipAmount.toFixed(2);
    return tipAmount;
};

var processEntries = function() {
    var bill_amount = parseFloat(byId("bill").value);
    var tip_percentage;
    var isValid = true;

    // validate first entry 
    if (bill_amount === "" ) {
        byId("bill_error").firstChild.nodeValue = "This field is required.";
        isValid = false;
    } else if (isNaN(bill_amount)) {
        byId("bill_error").firstChild.nodeValue = "The entry must be a number";
        isValid = false;
    } else {
        byId("bill_error").firstChild.nodeValue = "";
    }

    if (isValid) {      
        byId("tip_amount").value = calculateTip(bill_amount, tip_percentage);
    }
};

window.onload = function() {
    byId("calculate").onclick = processEntries;
    byId("bill").focus();
};