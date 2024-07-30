"use strict";

const createClock = (hourSpan, minuteSpan, secondSpan, ampmSpan) => {
    //This is a private state
    let clockTimer = null; // Variable to hold the interval ID for the clock timer

    //function to pad single digits with a leading zero
    const padSingleDigit = num => num.toString().padStart(2, "0");

    // Here we will to display the current time
    const displayCurrentTime = () => {
        const now = new Date();
        let hours = now.getHours();
        let ampm = "AM"; // Set default value for AM/PM

        // Correct hours and AM/PM value for display
        if (hours > 12) { // Convert from military time
            hours -= 12;
            ampm = "PM";
        } else { // Adjust 12 noon and 12 midnight
            switch (hours) {
                case 12: // Noon
                    ampm = "PM";
                    break;
                case 0: // Midnight
                    hours = 12;
                    ampm = "AM";
            }
        }
        // Update the HTML elements with the current time
        hourSpan.text(hours);
        minuteSpan.text(padSingleDigit(now.getMinutes()));
        secondSpan.text(padSingleDigit(now.getSeconds()));
        ampmSpan.text(ampm);
    };

    // Public methods
    return {
        start: () => {
            // Set the initial clock display
            displayCurrentTime();
            // Set an interval timer to update the clock every second
            clockTimer = setInterval(displayCurrentTime, 1000);
        }
    };
};
