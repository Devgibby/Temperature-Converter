let celciusInput = document.querySelector('.celcius > input');
let FahrenheitInput = document.querySelector('.Fahrenheit > input');
let kelvinInput = document.querySelector('.Kelvin > input'); // Corrected class name
let btn = document.querySelector('.button button');

function roundedNumber(number) {
    return Math.round(number * 100) / 100;
}

celciusInput.addEventListener('input', function () {
    let cTemp = parseFloat(celciusInput.value);
    let fTemp = (cTemp * 9/5) + 32;
    let kTemp = cTemp + 273.15;

    FahrenheitInput.value = roundedNumber(fTemp);
    kelvinInput.value = roundedNumber(kTemp);
});

FahrenheitInput.addEventListener('input', function () {
    let fTemp = parseFloat(FahrenheitInput.value);
    let cTemp = (fTemp - 32) * 5/9;
    let kTemp = (fTemp - 32) * 5/9 + 273.15;

    celciusInput.value = roundedNumber(cTemp);
    kelvinInput.value = roundedNumber(kTemp);
});

kelvinInput.addEventListener('input', function () {
    let kTemp = parseFloat(kelvinInput.value);
    let cTemp = kTemp - 273.15;
    let fTemp = (kTemp - 273.15) * 9/5 + 32;

    celciusInput.value = roundedNumber(cTemp);
    FahrenheitInput.value = roundedNumber(fTemp);
});

btn.addEventListener('click', function () {
    celciusInput.value = "";
    FahrenheitInput.value = "";
    kelvinInput.value = "";
});
