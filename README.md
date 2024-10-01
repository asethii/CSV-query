# CSV-query

## Overview
Fetch a CSV and use Javascript and HTML to do a simple query of the data by passing a key and returning a value. In this case, passing a ZIP code value and returning a time value.

## How it works
### Here's a detailed breakdown of the JavaScript code:

**Fetching the CSV file:** The fetch function is used to load a CSV file named data.csv. This returns a Promise that resolves to the Response to that request, whether it is successful or not.

**Reading the CSV data:** The response.text() method is called to read the response body to completion and returns a Promise that resolves to a USVString (text).

**Processing the CSV data:** The resulting text is split into lines by splitting on the newline character (\n). Each line is then split into fields by splitting on the comma character (,). The first field (the zipcode) is used as the key, and the second field (the time) is used as the value in an object named zipcodes.

**Setting up the event listener:** An event listener is added to a button with the id "btn". When this button is clicked, the following steps are executed:

**1. Getting the user input:** The value entered by the user into an input field with the id "zipcode" is read.

**2. Checking if the zipcode exists:** If the entered zipcode exists in the zipcodes object, the corresponding time is displayed as the original time. If it does not exist, a "No time found for this zipcode" message is displayed and the function returns.

**3. Converting 12-hour time to 24-hour time:** The original time is split into hours and minutes, and AM/PM. The hours are converted to 24-hour format if necessary.

**4. Subtracting 30 minutes:** A Date object is created with the 24-hour time, and 30 minutes are subtracted from it. The new time is then displayed.

**5. Adding 1 hour:** 90 minutes are added to the time (to account for the 30 minutes subtracted earlier and the additional hour). The new time is then displayed.

**6. Adding another hour:** Another hour is added to the time. The new time is then displayed.

This code uses several features of JavaScript, including Promises, the Fetch API, the Date object, string manipulation methods, and event listeners. It also demonstrates how to process CSV data and how to convert between 12-hour and 24-hour time formats.

## Example
See a working example here:
https://codepen.io/CodingAshinder/pen/KKOVmGR