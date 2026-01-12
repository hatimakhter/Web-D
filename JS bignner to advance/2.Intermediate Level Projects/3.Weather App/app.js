const apiKey = "YOUR_API_KEY"; // OpenWeather API key

// Current location weather
function getLocationWeather(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;

            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
            fetchWeather(url);
        }, () => {
            showError("Location access denied");
        });
    } else {
        showError("Geolocation not supported");
    }
}

// City search weather
function getCityWeather(){
    const city = document.getElementById("city").value.trim();
    if(city === ""){
        showError("Enter city name");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    fetchWeather(url);
}

// Fetch & display weather
function fetchWeather(url){
    fetch(url)
    .then(res => res.json())
    .then(data => {
        if(data.cod !== 200){
            showError("Location not found");
            return;
        }

        document.getElementById("error").innerText = "";
        document.getElementById("weather").style.display = "block";

        document.getElementById("cityName").innerText = data.name;
        document.getElementById("temp").innerText = Math.round(data.main.temp) + "°C";
        document.getElementById("condition").innerText = data.weather[0].main;
        document.getElementById("humidity").innerText = data.main.humidity;
        document.getElementById("wind").innerText = data.wind.speed;
    });
}

function showError(msg){
    document.getElementById("error").innerText = msg;
}
