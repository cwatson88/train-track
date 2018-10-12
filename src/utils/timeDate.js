/**
 * Now gets the current date and time
 * @returns {Object} day,month,year,date,minutes,hours,time
 */
const Now = (() => {
  const today = new Date();
  // day and month both need converting to a string then padding added,
  //  without doing this the value displays single digits with padding
  //  here is an example: 1 -> 01
  const day = today
    .getUTCDate()
    .toString()
    .padStart(2, "0");

  const month = (() => {
    // the month runs from 0 -12 it needs a + 1 as months start at 1 not 0 !!!
    let monthString = today.getUTCMonth() + 1;
    // if the string is less than ten it does not display a 0 as it is a number
    //    this will fix the padding issue! e.g. 1 -> 01
    monthString = monthString.toString().padStart(2, "0");
    return monthString;
  })();

  const year = today.getUTCFullYear();

  //   format the date and add a deliminater to the date, by default it is a /
  const date = (deliminater = "/") =>
    year + deliminater + month + deliminater + day;

  const timeString = today.toLocaleTimeString("en-GB");

  // split turns the string to an array and will split on the deliminator ':'
  // then you can use the array [hh,mm,ss]
  const hours = timeString.split(":")[0];
  const minutes = timeString.split(":")[1];
  const time = hours + ":" + minutes; /*?*/

  return {
    day,
    month,
    year,
    date,
    minutes,
    hours,
    time
  };
})();

export { Now };
