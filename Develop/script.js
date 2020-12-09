//HTML target variables
var currentDay = document.getElementById("currentDay")


//Date, time variables
var theDay = moment().format('dddd');  
var rightNow = moment().format("MMMM Do YYYY, h:mm:ss a")

//Added the current date and time to Work Day Scheduler header 
currentDay.textContent = rightNow