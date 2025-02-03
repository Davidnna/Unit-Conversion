const number = document.getElementById("number");
const length = document.getElementById("length");
const volume = document.getElementById("volume");
const mass = document.getElementById("mass");
const feet = 3.281;
const gallons = 0.264;
const pounds = 2.204;

number.addEventListener("input", function () {
    number.style.width = (number.value.length + 2.5) + "ch";
    if (number.value.length < 2) {
        number.value = "0" + number.value;
    } else if (number.value.slice(0, 1) === "0") {
        number.value = number.value.slice(1,);
    }
});

function convert() {
    const unit = number.value;
    length.textContent = `${unit} meters = ${(unit * feet).toFixed(3)} feet | ${unit} feet = ${(unit / feet).toFixed(3)} meters`;
    volume.textContent = `${unit} liters = ${(unit * gallons).toFixed(3)} gallons | ${unit} gallons = ${(unit / gallons).toFixed(3)} liters`;
    mass.textContent = `${unit} kilos = ${(unit * pounds).toFixed(3)} pounds | ${unit} pounds = ${(unit / pounds).toFixed(3)} kilos`;
    }