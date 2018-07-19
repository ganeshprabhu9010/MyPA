 var sessionValid = false;
 var callBackMethod = null;
 var confirmPin = null;
 var isResetPin = false;
 var sessionReset;
$("#appAuthentication").on( "pagebeforeshow", function( event ) {
                 $("#appPin").on("change paste keyup", function() {

                     if($(this).val().length>=4) {
                      if(isPinSet()) {
                            if(localStorage.getItem(AppPin) == EncryptAppPIN($(this).val())) {
                                                       sessionValid = true;
                                                       authenticateSuccess();
                            }
                            else {
                                 $(this).val("");
                                alert("Incorrect PIN")
                            }

                      }else{
                            if(isResetPin == true) {
                                if(localStorage.getItem(AppPin) == EncryptAppPIN($(this).val()) || sessionValid) {
                                    setPIN($(this).val());
                                    $(this).val("");
                                }

                                else {
                                    $(this).val("");
                                    alert("Incorrect PIN");
                                }

                            }
                            else {
                                    setPIN($(this).val());
                                    $(this).val("");
                            }
                      }


                     }


                 });
});

function authenticateApplication() {

if(isPinSet()) {
    $("#pinHeader").html("Enter PIN");
}
else {
    if(isResetPin && sessionValid != true) {
        $("#pinHeader").html("Enter current PIN");
    }
    else {
         $("#pinHeader").html("Enter new PIN");
    }
}
currentView = "appAuthentication";
$.mobile.navigate( "#appAuthentication", { role: "dialog" } );
}



function validateSession(callback){
    callBackMethod = callback;
    if(sessionValid == false || isResetPin == true) {
        authenticateApplication();
    }
    else {
        authenticateSuccess();
    }
}

function setPIN(pinVal){
    if(confirmPin == null) {
        if(isResetPin) {
                if(sessionValid) {

                confirmPin = pinVal;
                $("#pinHeader").html("Confirm PIN");
                }
                else {
                 $("#pinHeader").html("Enter new PIN");
                    sessionValid = true;
                }

                $("#appPin").val("");

        }
        else {
             confirmPin = pinVal;
             $("#pinHeader").html("Confirm PIN");
             $("#appPin").val("");
             return;
        }
    }
    else if(confirmPin == pinVal) {
         localStorage.setItem(AppPin,EncryptAppPIN(confirmPin));
          confirmPin = null;
          if(isResetPin) {
                alert("PIN Changed")
                authenticateSuccess();
          }
          else {
                validateSession(callBackMethod);
          }

    }
    else{
        alert("Pin does not match");
         confirmPin = null;
        authenticateApplication()
    }
}

function isPinSet() {
    var pin = localStorage.getItem(AppPin);
    return (pin != undefined && pin != null && !isResetPin);
}

function authenticateSuccess(){
    sessionValid = true;
    confirmPin = null;
    isResetPin = 0;
    $("#appPin").val("");
    callBackMethod();
    callBackMethod = null;
    clearTimeout(sessionReset);
    sessionReset = setTimeout(function(){sessionValid = false; }, (1000*60*5));

}

function authenticateFail(){
    clearTimeout(sessionReset);
    confirmPin = null;
    isResetPin = 0;
    callBackMethod = null;
    openHome();
}