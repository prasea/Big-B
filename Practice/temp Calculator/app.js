//Celsius to Fahrenheit
const UIcelsiusForm = document.getElementById('celsius-form');

UIcelsiusForm.addEventListener('submit', calculateFahrenheit);

function calculateFahrenheit(e){
    const UIcelsius = document.getElementById('celsius');
    const UIfahrenheit = document.getElementById('cFahrenheit');

    const celsius = parseFloat(UIcelsius.value);
    let fahrenheit;
    fahrenheit = (celsius * (9/5)) + 32;
    UIfahrenheit.value = fahrenheit.toFixed(2);
    e.preventDefault();
}

//Fahrenheit to Celsius
const UIfahrenheitForm = document.getElementById('fahrenheit-form');

UIfahrenheitForm.addEventListener('submit', calculateCelsius);

function calculateCelsius(e){
    const UIcelsius = document.getElementById('fCelsius')
    const UIfahrenheit = document.getElementById('fahrenheit');
    
    const fahrenheit = parseFloat(UIfahrenheit.value);    
    let celsius;
    celsius = (fahrenheit - 32) * (5/9);
    UIcelsius.value = celsius.toFixed(2);
    e.preventDefault();
}