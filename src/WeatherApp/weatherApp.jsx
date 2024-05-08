import React, { useState } from 'react'
import './WeatherApp.css'

import search_icon from '../components/Assets/search.png';
import clear_icon from '../components/Assets/clear.png';
import cloud_icon from '../components/Assets/cloud.png';
import drizzle_icon from '../components/Assets/drizzle.png';
import rain_icon from '../components/Assets/rain.png';
import snow_icon from '../components/Assets/snow.png';
import wind_icon from '../components/Assets/wind.png';
import humidity_icon from '../components/Assets/humidity.png';

const WeatherApp = () => {
    let api_key = "ad0c6bf9e700e996a399a469b44520a6";

    const [wicon, setWicon] = useState(cloud_icon);

    const search = async () => {
        const element = document.getElementsByClassName('cityInput');
        if (element[0].value === ""){
            return 0;
        }
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;
        
    let response = await fetch(url);
    let data = await response.json();

    const humidity = document.getElementsByClassName('humidity-percent');
    const wind = document.getElementsByClassName('wind-rate');
    const temperature = document.getElementsByClassName('weather-temp');
    const location = document.getElementsByClassName('weather-location');

    function humidity(){
        return data.main.humidity + "%";
    }

    function wind(){
        return Math.floor(data.wind.speed) + "km/h";
    }

    function temperature(){
        return Math.floor(data.main.temp) + "°C";
    }

    function location(){
        return data.name;
    }
/*
    humidity[0].innerHTML = data.main.humidity + "%"; //use states and remove innerHTML
    wind[0].innerHTML = Math.floor(data.wind.speed) + "km/h";
    temperature[0].innerHTML = Math.floor(data.main.temp) + "°C";
    location[0].innerHTML = data.name;
*/
        if (data.weather[0].icon === "01d" || data.weather[0].icon === "01n"){
            setWicon(clear_icon);
        }
        else if (data.weather[0].icon === "02d" || data.weather[0].icon === "02n"){
            setWicon(cloud_icon);
        }
        else if (data.weather[0].icon === "03d" || data.weather[0].icon === "03n"){
            setWicon(drizzle_icon);
        }
        else if (data.weather[0].icon === "04d" || data.weather[0].icon === "04n"){
            setWicon(drizzle_icon);
        }
        else if (data.weather[0].icon === "09d" || data.weather[0].icon === "09n"){
            setWicon(rain_icon);
        }
        else if (data.weather[0].icon === "10d" || data.weather[0].icon === "10n"){
            setWicon(rain_icon);
        }
        else if (data.weather[0].icon === "13d" || data.weather[0].icon === "13n"){
            setWicon(snow_icon);
        }
        else {
            setWicon(clear_icon);
        }

    }
    return (
        <div className='container'>
            <div className='top-bar'>
                <input type="text" className='cityInput' placeholder="search"></input>
                <div className='search-icon' onClick={() => {search()}}>
                    <img src={search_icon} alt="" />
                </div>
            </div>
        <div className="weather-image">
            <img src={wicon} alt="" />
        </div>
        <div className="weather-temp">24°C</div>
        <div className="weather-location">Delhi</div>
        <div className="data-container">
            <div className="element">
                <img src={humidity_icon} alt="" className='icon' />
                <div className="data">
                    <div className="humidity-percent">64%</div>
                    <div className="text">Humidity</div>
                </div>
            </div>

            <div className="element">
                <img src={wind_icon} alt="" className='icon' />
                <div className="data">
                    <div className="humidity-percent">18km/hr</div>
                    <div className="text">Wind Speed</div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default WeatherApp;