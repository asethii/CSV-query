window.addEventListener('DOMContentLoaded', (event) => {
    
    fetch('data.csv')
        .then(response => response.text())
        .then(data => {
            // Replace all instances of '\r' with an empty string, then split the CSV data into lines
            var lines = data.replace(/\r/g, '').split('\n');
    
            // Initialize an empty object to hold the zipcodes
            var zipcodes = {};
    
            // Process each line
            for (var i = 0; i < lines.length; i++) {
                // Split the line into fields
                var fields = lines[i].split(',');
    
                // Use the first field as the key and the second field as the value
                zipcodes[fields[0]] = fields[1];
            }
    
            document.getElementById("btn").addEventListener("click", function() {
                var zipcode = document.getElementById("zipcode").value;
    
                if(zipcodes[zipcode]){
                    document.getElementById("originalTime").innerHTML = "Original Time: " + zipcodes[zipcode];
    
                    // Convert 12-hour time to 24-hour time
                    var timeParts = zipcodes[zipcode].split(' ');
                    var hourMin = timeParts[0].split(':');
                    if(timeParts[1] === 'PM' && hourMin[0] !== '12') hourMin[0] = +hourMin[0] + 12;
                    if(timeParts[1] === 'AM' && hourMin[0] === '12') hourMin[0] = '00';
                    var time24 = hourMin.join(':');
    
                    // Parse the time and subtract 30 minutes
                    var time = new Date("1970-01-01T" + time24 + ":00");
                    time.setMinutes(time.getMinutes() - 30);
    
                    // Format the new time as a string
                    var newTime = time.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
    
                    document.getElementById("adjustedTimeBefore").innerHTML = "Adjusted Time (-30 minutes): " + newTime;
    
                    // Add an hour
                    time.setMinutes(time.getMinutes() + 90);
    
                    // Format the new time as a string
                    newTime = time.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
    
                    document.getElementById("adjustedTime").innerHTML = "Adjusted Time (+1 hour): " + newTime;
    
                    // Add another hour
                    time.setHours(time.getHours() + 1);
    
                    // Format the new time as a string
                    newTime = time.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
    
                    document.getElementById("adjustedTime2").innerHTML = "Adjusted Time (+2 hours): " + newTime;
    
                } else {
                    document.getElementById("adjustedTimeBefore").innerHTML = "";
                    document.getElementById("originalTime").innerHTML = "No time found for this zipcode";
                    document.getElementById("adjustedTime").innerHTML = "";
                    document.getElementById("adjustedTime2").innerHTML = "";
                }
            });
        })
        .catch((error) => {
            console.error('Error:', error);
        });  
    });
    