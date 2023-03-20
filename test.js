const timeMate = require("./lib/helper");
const moment = require("moment");

function TestGetTimeFrame() {
    let start = "22/01/2023";
    let end = "22/01/2028";
    console.log(
        `
Test GetTimeFrame function:
Result: Time frame between ${start} and ${end} is: 
`);
    console.log(timeMate.GetTimeFrame(start, end))
}

function TestFormatDate() {
    let date = "15/04/2023";
    console.log(
        `
Test FormatDate function:
Result: format date ${date} from "DD/MM/YYYY" to "YYYY-MM-DD" is: 
`);
    console.log(timeMate.FormatDate(date,"DD/MM/YYYY","YYYY-MM-DD"))
}
module.exports = {
  TestGetTimeFrame,
  TestFormatDate,
};