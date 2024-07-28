"use strict";

// Define the Module to create a module.
const Module = (function () {
    // Private array to store Trip objects. It is only accessible within the module.
    const tripsList = [];

    // Define the Trip class to represent each trip.
    class Trip {
        constructor(destination, km, litres) {
            this.destination = destination; // Destination of the trip.
            this.km = parseFloat(km);       // Kilometers driven, parsed as a floating-point number.
            this.litres = parseFloat(litres); // Litres of gas used, parsed as a floating-point number.
        }

        // a read-only property
        get isValid() {
            if (this.destination === "" || isNaN(this.km) || isNaN(this.litres)) {
                return false; // Invalid if destination is empty or km/litres are not numbers.
            } else if (this.km <= 0 || this.litres <= 0) {
                return false; // Invalid if km or litres are less than or equal to zero.
            } else {
                return true; // Valid otherwise.
            }
        }

        // a read-only property
        get kml() {
            return this.km / this.litres; // Calculate kml as km divided by litres.
        }

        // Convert the trip details to a string representation.
        toString() {
            const kml = this.kml.toFixed(1); // Round kml to one decimal place.
            return `${this.destination}: Kilometers - ${this.km}; KML - ${kml}`; // Format the string.
        }
    }

    // Function to add a trip to the trips array.
    function push(trip) {
        // Only allow Trip objects to be added to the array.
        if (trip instanceof Trip) {
            tripsList.push(trip);
        }
    }

    // Function to calculate the total kml for all trips.
    function totalKml() {
        let totalKm = 0;
        let totalLitres = 0;
        for (let trip of tripsList) {
            totalKm += trip.km; // Sum up kilometers.
            totalLitres += trip.litres; // Sum up litres.
        }
        return totalKm / totalLitres; // Calculate total kml as total km divided by total litres.
    }

    // Convert all trips details to a string representation including cumulative kml.
    function toString() {
        let str = "";
        for (let trip of tripsList) {
            str += trip.toString() + "\n"; // Append each trip's string representation to the result.
        }
        str += "\nCumulative KML: " + totalKml().toFixed(1); // Append cumulative kml.
        return str;
    }

    // Expose public methods and properties to interact with the trips array.
    return {
        Trip: Trip,
        push: push,
        totalKml: totalKml,
        toString: toString
    };
})();
