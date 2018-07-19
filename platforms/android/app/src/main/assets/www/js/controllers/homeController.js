$("#homePage").on( "pagebeforeshow", function( event ) {
                 configureAndroidConstants();
                  $(".eventProgressContainer").css("height",$(".eventProgressImage").css("height"));
                  updateProgress();
});

function updateProgress() {
    $(".noTaskImg").css("display","none");
    $(".eventProgressContainer").css("display","none");
    $(".currentTask").css("display","none");
    $(".currentTask").html("")
    setTimeout(function(){
               var totalEvent = 0;
                   var startDate = setStartDayFor(new Date());
                   var endDate = setEndDayFor(new Date());
               
                   getListOfEvents(startDate,endDate,function(data){
                                   totalEvent = data.length;
                                   if(data.length > 0) {
                                   
                                                   startDate = new Date();
                                   
                                                   getListOfEvents(startDate,endDate,function(completedData){
                                                                   completedEvent = totalEvent - completedData.length;
                                                                   $(".noTaskImg").css("display","none");
                                                                   $(".eventProgressContainer").css("display","block");
                                                                   $(".currentTask").css("display","block");
                                                                   var value = (100/totalEvent)*(totalEvent - completedEvent);
                                                                   $(".eventProgressHide").css("height",value+"%")
                                                                   
                                                                   var event = completedData[0];
                                                                   var eItem = $("<div>")
                                                                   eItem.addClass("eventItem");
                                                                   
                                                                   var eTime = $("<div>");
                                                                   eTime.addClass("eventTime")
                                                                   eTime.append('<div class="calPoint"></div>');
                                                                   var startDtVal = new Date(event[EVENTSTARTDATE]).toString();
                                                                   eTime.append(startDtVal.substr(startDtVal.indexOf(":")-2,5));
                                                                   
                                                                   
                                                                   var eDesc = $("<div>");
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
                                                                   
                                                                   $(".currentTask").append('<label class="myPaInfoLabel">Upcoming or Ongoing taks</label>');
                                                                   $(".currentTask").append(eItem);
                                                                   
                                                                   
                                                                   },function(error){
                                   
                                                                   print("error");
                                                                   });
                                   

                                   
                                   }
                                                   else {
                                                   $(".noTaskImg").css("display","block");
                                                   $(".eventProgressContainer").css("display","none");
                                                   $(".currentTask").css("display","none");
                                                   }
               
                                   },function(error){
                                   alert("Something went wrong! :(");
               
                                   });
               
               },250);
//    var startDate = setStartDayFor(new Date());
//    var endDate = new Date(new Date().getTime() + 1*24*60*60*1000);
//
//    getListOfEvents(startDate,endDate,function(data){
//
//                   alert(data.length)
//
//                    },function(error){
//                    alert("Something went wrong! :(");
//
//                    });
//    var totalEvent = 0;
//    var completedEvent = 0;
//
//    var startDate = setStartDayFor(new Date());;
//    var endDate = setEndDayFor(new Date());
//
//getListOfEvents(startDate,endDate,function(data){
//
//if(data.length > 0) {
//                totalEvent = 0;
//                startDate = new Date(new Date().getTime() + 1*24*60*60*1000);
//
//                getListOfEvents(startDate,endDate,function(data){
//                                completedEvent = totalEvent - data.length;
//                                $(".noTaskImg").css("display","none");
//                                $(".eventProgressContainer").css("display","block");
//                                var value = (100/4)*3;
//                                $(".eventProgressHide").css("height",value+"%")
//
//                                },function(error){
//
//                                print("error");
//                                });
//}
//                else {
//                $(".noTaskImg").css("display","block");
//                $(".eventProgressContainer").css("display","none");
//                }
//},function(error){
//
//print("error");
//});
    
    
    
//    if(totalEvent > 0) {
//        $(".noTaskImg").css("display","none");
//        $(".eventProgressContainer").css("display","block");
//        var value = (100/4)*3;
//        $(".eventProgressHide").css("height",value+"%")
//    }
//    else {
//        $(".noTaskImg").css("display","block");
//        $(".eventProgressContainer").css("display","none");
//    }

}
