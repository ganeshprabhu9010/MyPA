var credentialAccount = "account";
var credentialUsername = "username";
var credentialPassword ="password";
var CredentialLoc = "CredentialArrays";
var AppPin = "AppPin";

var EVENTSTARTDATE = "startDate";
var EVENTENDDATE = "endDate";
var EVENTTITLE = "title";
var EVENTMESSAGE = "message";
var EVENTLOCATION = "eventLocation";

var SETEVENTSTARTDATE = "startDate";
var SETEVENTENDDATE = "endDate";
var SETEVENTTITLE = "title";
var SETEVENTMESSAGE = "message";
var SETEVENTLOCATION = "eventLocation";

function configureAndroidConstants(){
    console.log("configureAndroidConstants");
    EVENTSTARTDATE = "dtstart";
    EVENTENDDATE = "dtend";
    EVENTTITLE = "title";
    EVENTMESSAGE = "message";
    EVENTLOCATION = "eventLocation";
    /*
     allDay:0
     calendar_id:"4"
     dtend:1524333600000
     dtstart:1524326400000
     eventLocation:"test Location"
     event_id:"709"
     id:"2947"
     title:"test title"
     */
}
