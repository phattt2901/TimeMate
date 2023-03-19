# TimeMate

TimeMate is a JavaScript library built on top of Moment.js that provides additional functionality for working with dates and times in your applications.

## Features

- Calculate the difference between two dates
- Format dates and times using custom templates
- Find the start or end of a period
- Built-in support for time zones and daylight saving time adjustments

## Usage
To use TimeMate in your application, simply include the library in your project and start using its functions. For example:
```
const timeMate = require('./lib/helper');
```
And call function directly like this:
```
timeMate.GetTimeFrame(moment("01/01/2023","DD/MM/YYYY"),moment("05/04/2023","DD/MM/YYYY"));
```
## Function Lists:
### GetTimeFrame(starDate, endDate): Calculates the timeframe between two moments in the specified units of time.
- **startDate**: The starting moment in ISO format (YYYY-MM-DDTHH:mm:ss.sssZ).
- **endDate**: The ending moment in ISO format (YYYY-MM-DDTHH:mm:ss.sssZ).

**Result**: Return Object
```
{
    years:number,
    months:number,
    weeks:number,
    days:number,
    fullYears:number,
    fullMonths:number,
    fullWeeks:number,
    fullDays:number,
}
 ```
 
**Error**: Some errors I catch and return to Object

**Start date and End date is not valid**:
```
{
    message:"Start date and End date is not valid"
}
```
**Start date is after End date**:
```
{
    message:"Start date need before End Date"
}
```
    


## Contributing

If you find a bug or would like to suggest a new feature, please open an issue or submit a pull request on our GitHub repository.
