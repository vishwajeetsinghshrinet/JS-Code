// Creating Date Objects
new Date(); // current date and time
new Date(2024, 0, 15); // year, month (0-11), day
new Date(2024, 0, 15, 10, 30, 0); // year, month, day, hour, minute, second
new Date("2024-01-15"); // date string
new Date(1705305600000); // timestamp (milliseconds)

// Get Methods
let date = new Date();

// getFullYear() - returns year (4 digits)
console.log(date.getFullYear()); // 2024

// getMonth() - returns month (0-11)
console.log(date.getMonth()); // 0 = January, 11 = December

// getDate() - returns day of month (1-31)
console.log(date.getDate()); // 15

// getDay() - returns day of week (0-6)
console.log(date.getDay()); // 0 = Sunday, 6 = Saturday

// getHours() - returns hour (0-23)
console.log(date.getHours()); // 14

// getMinutes() - returns minutes (0-59)
console.log(date.getMinutes()); // 30

// getSeconds() - returns seconds (0-59)
console.log(date.getSeconds()); // 45

// getMilliseconds() - returns milliseconds (0-999)
console.log(date.getMilliseconds()); // 123

// getTime() - returns timestamp (milliseconds since Jan 1, 1970)
console.log(date.getTime()); // 1705305600000

// getTimezoneOffset() - returns timezone offset in minutes
console.log(date.getTimezoneOffset()); // -330 (IST offset)

// UTC Get Methods (Coordinated Universal Time)
console.log(date.getUTCFullYear()); // 2024
console.log(date.getUTCMonth()); // 0
console.log(date.getUTCDate()); // 15
console.log(date.getUTCHours()); // 9
console.log(date.getUTCMinutes()); // 0
console.log(date.getUTCSeconds()); // 0

// Set Methods
let newDate = new Date();

// setFullYear() - sets year
newDate.setFullYear(2025);
console.log(newDate.getFullYear()); // 2025

// setMonth() - sets month (0-11)
newDate.setMonth(5); // June
console.log(newDate.getMonth()); // 5

// setDate() - sets day of month
newDate.setDate(20);
console.log(newDate.getDate()); // 20

// setHours() - sets hour (0-23)
newDate.setHours(15);
console.log(newDate.getHours()); // 15

// setMinutes() - sets minutes
newDate.setMinutes(45);
console.log(newDate.getMinutes()); // 45

// setSeconds() - sets seconds
newDate.setSeconds(30);
console.log(newDate.getSeconds()); // 30

// setMilliseconds() - sets milliseconds
newDate.setMilliseconds(500);
console.log(newDate.getMilliseconds()); // 500

// setTime() - sets timestamp
newDate.setTime(1705305600000);
console.log(newDate); // corresponding date

// UTC Set Methods
newDate.setUTCFullYear(2024);
newDate.setUTCMonth(0);
newDate.setUTCDate(15);

// Conversion Methods
let today = new Date();

// toString() - full string representation
console.log(today.toString()); // "Mon Jan 15 2024 14:30:45 GMT+0530 (India Standard Time)"

// toDateString() - date portion only
console.log(today.toDateString()); // "Mon Jan 15 2024"

// toTimeString() - time portion only
console.log(today.toTimeString()); // "14:30:45 GMT+0530 (India Standard Time)"

// toISOString() - ISO format string
console.log(today.toISOString()); // "2024-01-15T09:00:00.000Z"

// toUTCString() - UTC string
console.log(today.toUTCString()); // "Mon, 15 Jan 2024 09:00:00 GMT"

// toLocaleString() - locale-specific string
console.log(today.toLocaleString()); // "1/15/2024, 2:30:45 PM"
console.log(today.toLocaleString("en-US")); // "1/15/2024, 2:30:45 PM"
console.log(today.toLocaleString("de-DE")); // "15.1.2024, 14:30:45"
console.log(today.toLocaleString("en-IN")); // "15/1/2024, 2:30:45 pm"

// toLocaleDateString() - locale-specific date
console.log(today.toLocaleDateString()); // "1/15/2024"
console.log(today.toLocaleDateString("en-US")); // "1/15/2024"
console.log(today.toLocaleDateString("en-GB")); // "15/01/2024"

// toLocaleTimeString() - locale-specific time
console.log(today.toLocaleTimeString()); // "2:30:45 PM"
console.log(today.toLocaleTimeString("en-US")); // "2:30:45 PM"

// Static Methods
// Date.now() - returns current timestamp
console.log(Date.now()); // 1705305600000

// Date.parse() - parses date string to timestamp
console.log(Date.parse("2024-01-15")); // 1705276800000

// Date.UTC() - returns timestamp from UTC components
console.log(Date.UTC(2024, 0, 15)); // 1705276800000

// Date.UTC() with time
console.log(Date.UTC(2024, 0, 15, 10, 30, 0)); // 1705314600000

// Comparing Dates
let date1 = new Date("2024-01-15");
let date2 = new Date("2024-01-20");

// Comparison operators work with dates
console.log(date1 < date2); // true
console.log(date1 > date2); // false

// getTime() for precise comparison
console.log(date1.getTime() === date2.getTime()); // false

// Difference between dates (milliseconds)
let diff = date2 - date1;
console.log(diff); // 432000000 (5 days in milliseconds)
console.log(diff / (1000 * 60 * 60 * 24)); // 5 (days)

// Date Arithmetic
let futureDate = new Date();
futureDate.setDate(futureDate.getDate() + 7); // add 7 days
console.log(futureDate);

futureDate.setMonth(futureDate.getMonth() + 1); // add 1 month
console.log(futureDate);

futureDate.setFullYear(futureDate.getFullYear() + 1); // add 1 year
console.log(futureDate);

// Formatting with Intl.DateTimeFormat
let formatter = new Intl.DateTimeFormat("en-US", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric"
});
console.log(formatter.format(today)); // "Monday, January 15, 2024"

// Different format options
console.log(new Intl.DateTimeFormat("en-US", {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit"
}).format(today)); // "02:30:45 PM"

console.log(new Intl.DateTimeFormat("en-US", {
  dateStyle: "full",
  timeStyle: "long"
}).format(today)); // "Monday, January 15, 2024 at 2:30:45 PM GMT+5:30"
