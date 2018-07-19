/*
 
 <tr>
 <td class="credListItem">
     <div class="accContainer">Account</div>
     <div  class="usrNameContainer">
        <label class="credLabels">Ganesh Prabhu S skadjkasjdhkajsdh askjdakjsdh</label>
        <input class="cCopyName" type="image" src="../resources/copy.png" alt="Menu">
     </div>
     <div  class="pwdContainer">
        <label class="credLabels">password - 1 adsasd asd</label>
        <input class="cCopyPwd" type="image" src="../resources/copy.png" alt="Menu">
     </div>
 </td>
 </tr>

*/
var creds = [];
//[{"account":"Gmail","username":"ganeshprabhu9010@gmail.com","password":"password-1"},{"account":"yahoo","username":"ganeshprabhu@yahoo.com","password":"password-2"}];


$("#cerdentialsListPage").on( "pagebeforeshow", function( event ) {
                             creds = JSON.parse(localStorage.getItem(CredentialLoc));
                         loadCredentials();
                         validateSession(loadCredentialsListPage);
});
function loadCredentials(){
 $("#credList").html("");
    if(creds == null) {
        return;
    }
    for(var i = 0; i<creds.length; i++) {
        var credential = creds[i];
        
        var credTD = $("<td>");
        credTD.addClass("credListItem");
        
        
        

        var credAcc = $("<div>");
        credAcc.addClass("accContainer");
        credAcc.html(credential["account"]);
        credTD.append(credAcc);

        var credUsr = $('<div>');
        credUsr.addClass("usrNameContainer");

        var userLbl = $("<label>");
        userLbl.addClass("credLabels");
        userLbl.html(Decrypt(credential["username"]));
        credUsr.append(userLbl);




        credUsr.append('<input id="un'+i+'" class="cCopyName" type="image" src="../resources/copy.png" alt="copy">');
        credTD.append(credUsr);

        var credPwd = $("<div>");
        credPwd.addClass("pwdContainer");
        
        var pwdLbl = $("<label>");
        pwdLbl.addClass("credLabels");
        pwdLbl.html(Decrypt(credential["password"]));
        credPwd.append(pwdLbl);
        credPwd.append('<input id="pwd'+i+'"  class="cCopyPwd" type="image" src="../resources/copy.png" alt="Copy">');
        credTD.append(credPwd);
        credTD.append('<input id="del'+i+'" class="delCred" type="image" src="../resources/delete.png" alt="Delete">');
        
        var credRow=$("<tr>")
        credRow.append(credTD)
        $("#credList").append(credRow);
        
        $("#un"+i).unbind("click").bind("click", function(event){
        if(device.platform == "Android") {
        copyToClipboard(Decrypt(creds[parseInt($(this).attr('id').substr(2))]["username"]));
        return;
        }
                                        alert("Copied");
                                        cordova.plugins.clipboard.copy(Decrypt(creds[parseInt($(this).attr('id').substr(2))]["username"]));
                                         });
        $("#pwd"+i).unbind("click").bind("click", function(event){
        if(device.platform == "Android") {
        copyToClipboard(Decrypt(creds[parseInt($(this).attr('id').substr(3))]["password"]));
        return;
        }
                                        alert("Copied");
                                         cordova.plugins.clipboard.copy(Decrypt(creds[parseInt($(this).attr('id').substr(3))]["password"]));
                                        });
        $("#del"+i).unbind("click").bind("click", function(event){

                                    var confirmation =  confirm("Are you sure?");
                                    if(confirmation) {
                                                                             $(this).parent().parent().fadeOut(300, function() { $(this).remove(); })
                                                                             var index = parseInt($(this).attr('id').substr(3));
                                                                             creds.splice(index, 1);
                                                                             localStorage.setItem(CredentialLoc,JSON.stringify(creds));
                                    }
                                         });
    }
    $('.usrNameContainer .credLabels').each( function() {
                                            
                          $(this).unbind("click").bind("click", function(event){
                                                       $(".tooltip").remove();
//                                                       alert($(this).html());
                                                       var itm = $(this).parent();
                                                       itm.append('<span class="tooltip UNTooltip">'+$(this).html()+'</span>')
                                                       });
    });
    $('.pwdContainer .credLabels').each( function() {
                                        
                          $(this).unbind("click").bind("click", function(event){
                                                       $(".tooltip").remove();
//                                                       alert($(this).html());
                                                       var itm = $(this).parent();
                                                       itm.append('<span style="float:right;" class="tooltip pwdTooltip">'+$(this).html()+'</span>')
                                                       });
                          });
}

function copyToClipboard(value) {
var inputEle = $('<input type="text" style="opacity:0;">');
$("#cerdentialsListPage").append(inputEle);
inputEle.val(value);
inputEle.select();
if(document.execCommand("copy")) {
inputEle.remove();
alert("Copied");
}
else {
inputEle.remove();
alert("Error while copying")
}
}

