import React from "react";
import axios from "axios";
import  { ColorRing } from "react-loader-spinner";

export default function Weather(props) {
    function handleResponse(response) {
        alert(`The weather in ${response.data.name} is ${response.data.main.temp}°C`);
    }
    
        let apiKey = "2ad3df86f01baa30d925420a827292df";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
    
    
        axios.get(apiUrl).then(handleResponse); 
return (
    <ColorRing
    visible={true}
    height="80"
    width="80"
    ariaLabel="blocks-loading"
    wrapperStyle={{}}
    wrapperClass="blocks-wrapper"
    colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
  />
);
}