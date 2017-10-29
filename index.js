/*****Date time code*****/

var monthNames = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
  ];

var d = Date.now();
var ampm = "PM";
var pad = '0';
var minutes = d.getMinutes();

if ((d.getHours() / 12) < 1) ampm = "AM";
if (minutes < 10) minutes = (pad + minutes);

document.getElementById("date").innerHTML =  monthNames[d.getMonth()] + " " + d.getDate() + " " + d.getFullYear() + "     " + (d.getHours() % 12) + ":" + minutes + " " + ampm;
