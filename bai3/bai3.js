"use strict";
var weekDays;
(function (weekDays) {
    weekDays[weekDays["Monday"] = 0] = "Monday";
    weekDays[weekDays["Tuesday"] = 1] = "Tuesday";
    weekDays[weekDays["Wednesday"] = 2] = "Wednesday";
    weekDays[weekDays["Thursday"] = 3] = "Thursday";
    weekDays[weekDays["Friday"] = 4] = "Friday";
    weekDays[weekDays["Saturday"] = 5] = "Saturday";
    weekDays[weekDays["Sunday"] = 6] = "Sunday";
})(weekDays || (weekDays = {}));
console.log("Các ngày trong tuần:");
console.log("Monday:", weekDays.Monday);
console.log("Tuesday:", weekDays.Tuesday);
console.log("Wednesday:", weekDays.Wednesday);
console.log("Thursday:", weekDays.Thursday);
console.log("Friday:", weekDays.Friday);
console.log("Saturday:", weekDays.Saturday);
console.log("Sunday:", weekDays.Sunday);
