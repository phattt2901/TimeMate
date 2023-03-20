const moment = require("moment");

/**
 * Calculates the timeframe between two moments in the specified units of time.
 * @param {string} start The starting string date.
 * @param {string} end The ending string date.
 * @param {string} format Format date like "DD/MM/YYYY".
 * @returns {Object} The timeframe between the two moments in the specified units of time.
 */

exports.GetTimeFrame = (start, end, format = "DD/MM/YYYY") => {
  try {
    if (!start || !end) {
      return {
        message: "Start date and End date is not valid",
      };
    }
    if (moment(start,format).isAfter(moment(end,format))) {
      return { 
        message: "Start date need before End Date"
      }
    }
    if (!this.IsValidDate(start,format) || !this.IsValidDate(end,format)) {
      return { 
        message: "String date is not valid format"
      }
    }
    const duration = moment.duration(moment(end).diff(moment(start)));
    return {
      years: duration.years(),
      months: duration.months(),
      weeks: duration.weeks(),
      days: duration.days(),
      fullYears: parseInt(duration.as("years")),
      fullMonth: parseInt(duration.as("months")),
      fullWeeks: parseInt(duration.as("weeks")),
      fullDays: parseInt(duration.as("days")),
    };
  } catch (e) {
    return {
      message:e.message
    }
  }
}

/**
 * Format string date to template.
 * @param {string} date The string date like "23/01/2023" or "2023-01-04".
 * @param {string} currentFormat The current format.
 * @param {string} resultFormat The result format.
 * @returns {string} The date with result format
 */
exports.FormatDate = (date, currentFormat, resultFormat) =>{
  try {
    return {
      date: moment(date, currentFormat).format(resultFormat)
    }
  } catch (e) {
    return {
      message:e.message
    }
  }
}

/**
 * Valid string date.
 * @param {string} date The string date like "23/01/2023" or "2023-01-04".
 * @param {string} format format Date like "DD/MM/YYYY".
 * @returns {boolean} return true/false
 */
exports.IsValidDate = (date,format) =>{
  try {
    return moment(date,format).isValid()
  } catch (e) {
    return {
      message:e.message
    }
  }
}