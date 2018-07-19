$("#createEventPage").on( "pagebeforeshow", function( event ) {
//                         closeMenu();
                         $( "#eMenua" ).unbind("click").bind("click", function(event){
                                                            openMenu();
                                                            });
                         var dt = new Date();
                         
                         $("#eTitle").val("test title");
                         $("#eLoction").val("test Location");
                         $("#eMessage").val("test Message");
                         
                         
                         $("#eSave").unbind("click").bind("click", function(event){
                                                          addEvent();
                         
                         });
});

function addEvent() {
                         var startDate = new Date($("#eDate").val());
                         var endDate = new Date($("#eDate").val());
                         var startTime = $("#eStartTime").val();
                         var eEndTime = $("#eEndTime").val();
                         
                         
                         
                         startDate.setHours(parseInt(startTime.substr(0,2)));
                         startDate.setMinutes(parseInt(startTime.substr(3)));
                         
                         endDate.setHours(parseInt(eEndTime.substr(0,2)));
                         endDate.setMinutes(parseInt(eEndTime.substr(3)));
                         if(startDate >= endDate) {
                            alert("Enter a valid date, Start time should be less than end time");
                         return;
                         }
                         else if(startDate < (new Date())) {
                         alert("Event should start in future");
                         return;
                         }
                         
                         var eventDict = {
                         "startDate":startDate,
                         "endDate":endDate,
                         "title" :$("#eTitle").val(),
                         "eventLocation":$("#eLoction").val(),
                         "message":$("#eMessage").val()
                         }
                         createCalendarEvent(eventDict,function(){
                                             
                                             alert("Event added");
 
                                             },function(){
                                             alert("Something went wrong");
                                             
                                             })

}


/*

var title = eventDetails["title"];
var eventLocation = eventDetails["eventLocation"];
var notes = eventDetails["notes"];
var startDate = eventDetails["startDate"];
var endDate = eventDetails["endDate"];
*/
