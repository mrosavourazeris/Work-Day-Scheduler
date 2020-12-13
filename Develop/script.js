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