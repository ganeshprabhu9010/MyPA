var credentialArray = [];
$("#addCredentialPage").on( "pagebeforeshow", function( event ) {
                           if(credentialArray.length == 0) {
                               credentialArray = JSON.parse(localStorage.getItem(CredentialLoc));
                           }
                           
                           $( "#credentialAddbtn" ).unbind("click").bind("click", function(event){
                            
                                             addCredentials();
                                                                         
                                 });
                           });
function addCredentials() {
    var credentialDict = {};
    var credentialAccountVal = $.trim($("#credentialAccountVal").val());
    var credentialUsernameVal = $.trim($("#credentialUserNameVal").val());
    var credentialPasswordVal = $.trim($("#credentialPasswordVal").val());
    if(credentialAccountVal == "" || credentialUsernameVal == "" || credentialPasswordVal== "") {
        alert("Please fill all details");
        return;
    }
    credentialDict[credentialAccount] = credentialAccountVal;
    credentialDict[credentialUsername] = Encrypt(credentialUsernameVal);
    credentialDict[credentialPassword] = Encrypt(credentialPasswordVal);
    if(credentialArray == null) {
        credentialArray = [credentialDict];
    }
    else {
        credentialArray.push(credentialDict);
    }
    
    localStorage.setItem(CredentialLoc,JSON.stringify(credentialArray));
    $("#credentialAccountVal").val("");
    $("#credentialUserNameVal").val("");
    $("#credentialPasswordVal").val("");
    loadCredentialsListPage();
}


