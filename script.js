var form = document.getElementById('search')

form.addEventListener('submit',function(event){
    event.preventDefault()
    var query = document.getElementById("query").value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=ee9792edbe3bb8ed881a6da0ddd0ab3b`)
    .then (res => res.json())
    .then (data=> {
    const main = data.main;
    const weather = data.weather[0];
    const wind = data.wind;
    document.getElementById("city").innerHTML = `Weather in ${data.name}`;
    document.getElementById("temp").innerHTML = `${Math.round(main.temp)}°C`;
    document.getElementById("description").innerHTML = `${weather.main}`;
    document.getElementById("humidity").innerHTML = `Humidity: ${main.humidity}%`;
    document.getElementById("wind").innerHTML = `Wind speed: ${wind.speed} km/h`;
    })
})