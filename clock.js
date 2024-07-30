"use strict";

$(document).ready(function () {
    // Create and start the clock using the library
    const clock = createClock($("#hours"), $("#minutes"), $("#seconds"), $("#ampm"));
    clock.start(); // Initialize and start the clock

    // Create the stopwatch using the library
    const stopwatch = createStopwatch($("#s_minutes"), $("#s_seconds"), $("#s_ms"));

    // Attach event handlers for the stopwatch buttons
    $("#start").click(() => {
        stopwatch.start(); // Start the stopwatch when the start button is clicked
    });

    $("#stop").click(() => {
        stopwatch.stop(); // Stop the stopwatch when the stop button is clicked
    });

    $("#reset").click(() => {
        stopwatch.reset(); // Reset the stopwatch when the reset button is clicked
    });
}); // end ready()
