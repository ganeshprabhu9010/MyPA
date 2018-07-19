var shouldReloadList = 1;
var currentView;
function openMenu() {
    $(".tooltip").remove();
    $("#loadHome").unbind("click").bind("click", function(event){
                                        openHome();
                                        });
    $("#loadCreateEvent").unbind("click").bind("click", function(event){
                                               
                                               loadCreateEvent();
                                               });
    $("#loadEventListPage").unbind("click").bind("click", function(event){
                                                 
                                                 loadEventListPage();
                                                 });
    $("#AddCredentials").unbind("click").bind("click", function(event){
                                              
                                              loadAddCredentialPage();
                                              });
    $("#loadCredentialList").unbind("click").bind("click", function(event){
                                                  
                                                  loadCredentialsListPage();
                                                  });
    
    $("#closeMenu").unbind("click").bind("click", function(event){
                                         closeMenu();
                                         });
    $("#loadChangePIN").unbind("click").bind("click", function(event){
                                             loadChangePIN();
                                             });
    $("#menu-panel").addClass("menuOpen");
}

function openHome() {
    
    $("#addCredentialMenu").html("");
    
    if(currentView == "homePage") {
        closeMenu();
        return;
    }
    
    currentView = "homePage";
    window.location.href = "#homePage";
    closeMenu();
    
}

function closeMenu() {
    $("#menu-panel").removeClass("menuOpen");
}

function loadCreateEvent() {

    if(currentView == "createEventPage") {
        closeMenu();
        return;
    }
    $("#addCredentialMenu").html("");
    $("#addCredentialMenu").append('<input id="menuAccessibilityBtn" type="image" src="../resources/event.png">');
    $("#addCredentialMenu").unbind("click").bind("click", function(event){loadEventListPage();});

    $( "#createEventPage" ).load( "createEvent.html", function() {

                                 currentView = "createEventPage";
                                 window.location.href = "#createEventPage";
                                 closeMenu();
                                 });
}

function loadEventListPage() {
        if(currentView == "eventListPage") {
            closeMenu();
            return;
        }

    $("#addCredentialMenu").html("");
    $("#addCredentialMenu").append('<input id="menuAccessibilityBtn" type="image" src="../resources/addevent.png">');
    $("#addCredentialMenu").unbind("click").bind("click", function(event){loadCreateEvent();});
    

    if(shouldReloadList == 1) {
        $( "#eventListPage" ).load("eventlist.html", function() {
                                   currentView = "eventListPage";
                                   window.location.href = "#eventListPage";
                                   closeMenu();
                                   });
    }
    else {
        window.location.href = "#eventListPage";
    }
    
}

function loadAddCredentialPage() {
                if(currentView == "addCredentialPage") {
                    closeMenu();
                    return;
                }

    $("#addCredentialMenu").html("");
    $("#addCredentialMenu").append('<input id="menuAccessibilityBtn" type="image" src="../resources/list.png">');
    $("#addCredentialMenu").unbind("click").bind("click", function(event){loadCredentialsListPage();});
    
    $( "#addCredentialPage" ).load("addCredential.html", function() {
                                   currentView = "addCredentialPage";
                                   
                                   window.location.href = "#addCredentialPage";
                                   closeMenu();
                                   });
}
function loadCredentialsListPage() {

            if(currentView == "cerdentialsListPage") {
                closeMenu();
                return;
            }

        $( "#cerdentialsListPage" ).html("");



    $("#addCredentialMenu").html("");
    $("#addCredentialMenu").append('<input id="menuAccessibilityBtn" type="image" src="../resources/lock.png">');
    $("#addCredentialMenu").unbind("click").bind("click", function(event){
                                                 $(".tooltip").remove();
                                                 loadAddCredentialPage();
                                                 
                                                 });


    $( "#cerdentialsListPage" ).load("credentialsList.html", function() {
                                     
                                     currentView = "cerdentialsListPage";
                                     window.location.href = "#cerdentialsListPage";
                                     closeMenu();
                                     });
}


function loadChangePIN(){
    isResetPin = true;
    closeMenu();
    validateSession(loadCredentialsListPage);
}