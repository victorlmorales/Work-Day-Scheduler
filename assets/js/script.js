//Display Today's Date at the Top
//Displays current date at the top of the page
var todayDate = dayjs().format('dddd, MMMM DD, YYYY');
$('#currentDay').text(todayDate);
    
$(function () {
    //Saves on Click Event
    $(".saveBtn").on("click", function () {
        // Get nearby values of the description in JQuery
        var eventText = $(this).siblings(".description").val();
        var eventTime = $(this).parent().attr("id");

        // Save text in local storage
        localStorage.setItem(eventTime, eventText);
    });
                    
    // Changes the time block depending on current time
    function colorTime(){
        
        var currentHour = dayjs().hour();
        
        $('.time-block').each(function(){
            var hour = parseInt($(this).attr('id'));

            if (currentHour === hour) {
                $(this).addClass('present');
                $(this).removeClass('future');
                $(this).removeClass('past');
                
            } else if (currentHour < hour){
                $(this).addClass('future');
                $(this).removeClass('present');
                $(this).removeClass('past');
            } else{
                $(this).addClass('past');
                $(this).removeClass('present');
                $(this).removeClass('future');
            }
        })
    };

    // Saves the event on the App
    function getEvent(){
        $('.hour').each(function(){
            var Hour = $(this).parent().attr('id');
            var event = localStorage.getItem(Hour);
            
            if(event !== null){
                $(this).siblings('.description').val(event);
            }
        })
    }

    //Function Calls
    colorTime();
    getEvent();            
});