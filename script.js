const apiKey = "18d48e6b10ab2502b0a18c338b358db3";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const search = document.querySelector(".search-box input");
const button = document.querySelector(".search-box button");
const boxElement = document.querySelector(".box");
const bottominfo = document.querySelector(".bottom-info");

async function getWeather(name) {
        const response = await fetch(apiUrl + name + `&appid=${apiKey}`);
        const data = await response.json();
        console.log(data);

        document.querySelector(".city").innerHTML= data.name;
        document.querySelector(".temp").innerHTML= Math.round(data.main.temp) + "°C";
        document.querySelector(".Humidity").innerHTML= data.main.humidity + "%";
        document.querySelector(".windspeed").innerHTML= data.wind.speed + "km/h";
        document.querySelector(".Pressure").innerHTML= data.main.pressure + "hPa";

        if(data.weather[0].main == "Rain") {
                boxElement.style.backgroundImage = "url('rainy.jpeg')";
        }
        if(data.weather[0].main == "Clear") {
                boxElement.style.backgroundImage = "url('clear.jpeg')";
        }
        if(data.weather[0].main == "Snow") {
                boxElement.style.backgroundImage = "url('snowy.jpeg')";
        }
        if(data.weather[0].main == "Drizzle") {
                boxElement.style.backgroundImage = "url('drizzle.jpeg')";
        }
        if(data.weather[0].main == "Mist") {
                boxElement.style.backgroundImage = "url('mist.jpeg')";
        }
        if(data.weather[0].main == "Clouds") {
                boxElement.style.backgroundImage = "url('cloudy.jpeg')";
        }
}
button.addEventListener("click", () => {
        getWeather(search.value);
})


