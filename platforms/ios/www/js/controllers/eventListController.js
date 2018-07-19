/*
 <div class="eventTime" >
 <div class="calPoint"></div>
 8:00 AM
 </div>
 <div class="eventDesc">
 
 This is sample text. This is sample text. This is sample text. This is sample text. This is sample text. This is sample text. This is sample text. This is sample text. This is sample text. This is sample text. This is sample text. This is sample text. This is sample text. This is sample text. This is sample text. This is sample text. This is sample text. This is sample text. This is sample text.
 </div>
 <div class="eventNote">
 Sample Note. Sample Note. Sample Note. Sample Note. Sample Note.
 </div>
 
 */
$("#eventListPage").on( "pagebeforeshow", function( event ) {

//                       closeMenu();
                       setTimeout(function(){ createEventList(); }, 750);
                       
                       $("#CalendarBtn").unbind("click").bind("click", function(event){
                                                              openCalendarNow();
                                                              });
                       
                       });

function createEventList() {
    $("#eventPageContent").html("");
    var startDate = setStartDayFor(new Date());;
    var endDate = setEndDayFor(new Date());
    
    getListOfEvents(startDate,endDate,function(data){
                    
                    for(var i = 0; i<data.length; i++) {
                        createEventListItem(data[i]);
                    }
                    
                    },function(error){
                    alert("Something went wrong! :(");
                    
                    })
}


function createEventListItem(event) {
    var eItem = $("<div>")
    eItem.addClass("eventItem");
    
    var eTime = $("<div>");
    eTime.addClass("eventTime")
    eTime.append('<div class="calPoint"></div>');
    var startDtVal = new Date(event[EVENTSTARTDATE]).toString();
    eTime.append(startDtVal.substr(startDtVal.indexOf(":")-2,5));
    
    
    var eDesc = $("<div>");
    eDesc.addClass("eventDesc");
    eDesc.append(event[EVENTTITLE]);
    if(event[EVENTMESSAGE] != undefined){
        eDesc.append("\n"+event[EVENTMESSAGE]);
    }
    
//    var eNote = $("<div>");
//    eNote.addClass("eventeNote");
//    eNote.append("test Note");
    
    
    eItem.append(eTime);
    eItem.append(eDesc);
//    eItem.append(eNote);
    
    
    $("#eventPageContent").append(eItem);
    
}



