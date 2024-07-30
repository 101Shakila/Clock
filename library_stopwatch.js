"use strict";

const createStopwatch = (minuteSpan, secondSpan, msSpan) => {
    // Private state
    let stopwatchTimer = null; // Variable to hold the interval ID for the stopwatch timer
    let elapsed = { minutes: 0, seconds: 0, milliseconds: 0 }; // Object to track elapsed time

    // Helper function to pad single digits with a leading zero
    const padSingleDigit = num => num.toString().padStart(2, "0");

    // Function to increment the stopwatch time
    const tickStopwatch = () => {
        // Increment milliseconds by 10 milliseconds
        elapsed.milliseconds += 10;

        // If milliseconds total 1000, increment seconds by one and reset milliseconds to zero
        if (elapsed.milliseconds === 1000) {
            elapsed.seconds++;
            elapsed.milliseconds = 0;
        }
        // If seconds total 60, increment minutes by one and reset seconds to zero
        if (elapsed.seconds === 60) {
            elapsed.minutes++;
            elapsed.seconds = 0;
        }

        // Display the new stopwatch time
        minuteSpan.text(padSingleDigit(elapsed.minutes));
        secondSpan.text(padSingleDigit(elapsed.seconds));
        msSpan.text(elapsed.milliseconds);
    };

    // Public methods
    return {
        start: () => {
            // Do the first tick of the stopwatch and then set an interval timer to tick 
            // the stopwatch every 10 milliseconds. Store the timer object in stopwatchTimer 
            // variable so the stop and reset methods can stop the timer.
            tickStopwatch();
            stopwatchTimer = setInterval(tickStopwatch, 10);
        },
        stop: () => {
            // Stop the timer
            clearInterval(stopwatchTimer);
        },
        reset: () => {
            // Stop the timer
            clearInterval(stopwatchTimer);

            // Clear the elapsed object and stopwatch display
            elapsed = { minutes: 0, seconds: 0, milliseconds: 0 };

            // Reset the displayed time to "00:00:000"
            minuteSpan.text("00");
            secondSpan.text("00");
            msSpan.text("000");
        }
    };
};
