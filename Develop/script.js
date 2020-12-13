//Global variables grabbing DOM elements
var currentDay = document.getElementById("currentDay")
var currentTime = document.getElementById("currentTime")
var theDay = moment().format('dddd');  
var rightNow = moment().format('LL');
var theTime = moment().format('LT');
//taking the current time and rounding it down to the whole hour
var currentHour = theTime.split(":")[0]
//creating an array for each time table
var allHours = ["9","10","11","12","1","2","3","4","5"]
//Added the current date and time to Work Day Scheduler header 
currentDay.textContent = rightNow
currentTime.textContent = theTime
//selecting each time table and saving them into variables
var nine = $("#9AM")
var ten = $("#10AM")
var eleven = $("#11AM")
var twelve = $("#12PM")
var one = $("#1PM")
var two = $("#2PM")
var three = $("#3PM")
var four = $("#4PM")
var five = $("#5PM")
//saving all the time tables into an array
var allTextRows = [nine, ten, eleven, twelve, one, two, three, four, five]
//when i click save button, the text the user puts into the text box is saved into local storage
$(".saveBtn").on("click", function(event){
    //prevents the page from reloading when the save button is clicked
    event.preventDefault()
    //saving the variable from user inputs into local storage
    for (var i = 0; i < allTextRows.length; i++){
        localStorage.setItem(allTextRows[i].attr("id"),allTextRows[i].val())
    }
})
//pulling local storage values and adding it to the text area of the html
for (var i = 0; i < allTextRows.length; i++){
    allTextRows[i].val(localStorage.getItem(allTextRows[i].attr("id")))
}
//set the color of the text area for each hour on the schedule
function colors (){
    var presentHourRendered = false;
    for (var i = 0; i < allHours.length; i++){
        if (currentHour !== allHours[i] && presentHourRendered === true){
            document.getElementById(allHours[i]).firstElementChild.nextElementSibling.className += " future"
        }
        else if (currentHour === allHours[i]){
            presentHourRendered = true;
            document.getElementById(allHours[i]).firstElementChild.nextElementSibling.className += " present"
        }
        else {
            document.getElementById(allHours[i]).firstElementChild.nextElementSibling.className += " past"
        }
    }
}
colors ()