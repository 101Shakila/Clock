"use strict";

$(document).ready(() => {
    const trips = Module; // Use the Module

    $("#add_trip").click(() => {
        const trip = new trips.Trip(
            $("#destination").val(), $("#km").val(), $("#litres").val()); // Reference Trip from Module

        if (trip.isValid) {
            trips.push(trip);
            $("#trip_list").val(trips.toString());

            $("#destination").val("");
            $("#km").val("");
            $("#litres").val("");

            $("#destination").focus();
        }
        else {
            alert("Please complete all fields.\nKilometers and litres "
                + "must be numeric and greater than zero.");
            $("#destination").select();
        }
    });

    $("#destination").focus();
});
