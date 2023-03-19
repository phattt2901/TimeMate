const moment = require("moment");

/**
 * Calculates the timeframe between two moments in the specified units of time.
 * @param {string} start The starting moment in ISO format (YYYY-MM-DDTHH:mm:ss.sssZ).
 * @param {string} end The ending moment in ISO format (YYYY-MM-DDTHH:mm:ss.sssZ).
 * @returns {Object} The timeframe between the two moments in the specified units of time.
 */

exports.GetTimeFrame = (start, end) => {
  try {
    if (start.isAfter(end)) {
      return { 
        message: "Start date need before End Date"
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
