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


});