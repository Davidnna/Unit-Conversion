const form = document.getElementById("form");
const number = document.getElementById("number");
const length = document.getElementById("length");
const volume = document.getElementById("volume");
const mass = document.getElementById("mass");
const copied = document.getElementById("copied");
const error = document.getElementById("error");
const foot = 3.281;
const gallon = 0.264;
const pound = 2.204;

// If 'e' key is pressed, prevent the default action
number.addEventListener('keydown', (event) => {
    if (event.key === 'e' || event.key === 'E') {
      event.preventDefault();
    }
});

// Adjust the width as numbers are typed, and always show appropriate display
number.addEventListener("input", function () {
    number.style.width = (number.value.length + 2.5) + "ch";
    if (number.value.length < 2) {
        number.value = "0" + number.value;
    } else if (number.value.slice(0, 1) === "0") {
        number.value = number.value.slice(1,);
    }
});

// Prevent form from submitting
form.addEventListener("submit", function (event) {
    event.preventDefault();
    convert();
});

// Convert to units
function convert() {
    if (number.value === "" || number.value === "00") {
        error.style.display = "block";
    }
    else {
        error.style.display = "none";
        const unit = number.value;
        const feet = (unit * foot).toFixed(3);
        const gallons = (unit * gallon).toFixed(3);
        const pounds = (unit * pound).toFixed(3);
        const meters = (unit / foot).toFixed(3);
        const liters = (unit / gallon).toFixed(3);
        const kilos = (unit / pound).toFixed(3);
        length.innerHTML = `<span onclick="copyText(${unit})">${unit}</span> meters = <span onclick="copyText(${feet})">${feet}</span> feet | <span onclick="copyText(${unit})">${unit}</span> feet = <span onclick="copyText(${meters})">${meters}</span> meters`;
        volume.innerHTML = `<span onclick="copyText(${unit})">${unit}</span> liters = <span onclick="copyText(${gallons})">${gallons}</span> gallons | <span onclick="copyText(${unit})">${unit}</span> gallons = <span onclick="copyText(${liters})">${liters}</span> liters`;
        mass.innerHTML = `<span onclick="copyText(${unit})">${unit}</span> kilos = <span onclick="copyText(${pounds})">${pounds}</span> pounds | <span onclick="copyText(${unit})">${unit}</span> pounds = <span onclick="copyText(${kilos})">${kilos}</span> kilos`;
    }
}

// Copy text when clicked and display in front end
function copyText(char) {
    navigator.clipboard.writeText(char).then(() => {
        copied.style.display = "block";
        setTimeout(() => {
            copied.style.display = "none";
        }, 2000);      
    });
}