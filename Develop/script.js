//Global variables grabbing DOM elements
var currentDay = document.getElementById("currentDay")
var currentTime = document.getElementById("currentTime")
var theDay = moment().format('dddd');  
var rightNow = moment().format('LL');
var theTime = moment().format('LT');
//Date, time variables
var theDay = moment().format('dddd');  
var rightNow = moment().format('LL');

//Added the current date and time to Work Day Scheduler header 
currentDay.textContent = rightNow
