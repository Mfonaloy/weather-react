import React, { useState } from "react";
import axios from "axios";
import Footer from "./Footer";


export default function Weather() {
    const [city, setCity] = useState("");
    const [loaded, setLoaded] = useState(false);
    const [weather, setWeather] = useState({});
  
    function displayWeather(response) {
      setLoaded(true);
      setWeather({
        city: response.data.name,
        temperature: response.data.main.temp,
        description: response.data.weather[0].description,
        wind: response.data.wind.speed,
        humidity: response.data.main.humidity,
        icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
      });
    }
  
    function handleSubmit(event) {
      event.preventDefault();
      let apiKey = `2d96d64425dca1d6eda00d942a281c0d`;
      let units = `metric`;
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
      axios.get(url).then(displayWeather);
    }
  
    function cityInput(event) {
      setCity(event.target.value);
    }
  
    let form = (
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter a city" onChange={cityInput} />
        <input type="submit" value="search" />
      </form>
    );
  
    if (loaded === true) {
      return (
        <div>
          {form}
          <br />
          <div>
            <strong>{weather.city}</strong>
          </div>
          <div>Temperature: {weather.temperature}°C</div>
          <div>Description: {weather.description}</div>
          <div>Humidity: {weather.humidity}%</div>
          <div>Wind: {weather.wind} km/h</div>
          <div>
            <img src={weather.icon} alt="weather icon" />
          </div>
          <Footer />
        </div>
      );
    } else {
      return form;

    }
  }