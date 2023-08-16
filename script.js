(function(){

"use strict";

// Get references to necessary DOM elements
const myForm = document.querySelector('form'); // Reference to the form element
const myanswer = document.querySelector('#answer'); // Reference to the answer element
const header = document.querySelector('h1'); // Reference to the h1 element
const para = document.querySelector('p'); // Reference to the p element

// Add event listener for keydown event on the whole document
document.addEventListener('keydown', function (evt){
    
    let keyPress = evt.code;

    // Check which key is pressed
    if (keyPress === 'KeyK'){

        // Switch to Kilometers to Miles Converter
        header.innerHTML = "Kilometers to Miles Converter";
        para.innerHTML ="Type in a number of kilometers and click the button to convert the distance to miles.";

    } else if (keyPress === 'KeyM'){

        // Switch to Miles to Kilometers Converter
        header.innerHTML = "Miles to Kilometers Converter";
        para.innerHTML ="Type in a number of miles and click the button to convert the distance to kilometers.";
    }
});

// Add event listener for form submission
myForm.addEventListener('submit', function(evt) {

    evt.preventDefault(); // Prevent form submission

    const distance = parseFloat(document.querySelector('#distance').value);

    let conversionResult = '';

    if (distance){

        if (header.innerHTML === 'Miles to Kilometers Converter'){

            // Convert miles to kilometers
            const milesCovt = (distance * 1.609344).toFixed(3);
            conversionResult = `${distance} miles converts to ${milesCovt} kilometers`;

        } else {

            // Convert kilometers to miles
            const kilometersCovt = (distance / 1.609344).toFixed(3);
            conversionResult = `${distance} kilometers converts to ${kilometersCovt} miles`;
        }

    } else {

        // Handle the case where the input is empty or not a valid number
        conversionResult = "<h2>Please Enter a Number</h2>";
    }

    // Update the answer element with the conversion result
    myanswer.innerHTML = conversionResult;
});

}());
