const timeMate = require('./lib/helper');
const moment = require("moment");
let start = moment("21/03/2022", "DD/MM/YYYY");
let end = moment("28/01/2025", "DD/MM/YYYY");
console.log(timeMate.GetTimeFrame(start, end, "month"));