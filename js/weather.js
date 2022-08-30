
"use strict";

const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');
export const city = document.querySelector('.city');

import { flag } from "./translate.js";

export async function getWeather(lang = 'en', wSpd = 'Wind speed', hum = 'Humidity', metric = 'm/s') {  
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=${lang}&appid=f21e1e471290e84dc857c675177b5875&units=metric`;
  const res = await fetch(url);

  if (res.ok) {
  const data = await res.json(); 
  
  weatherIcon.className = 'weather-icon owf';
  weatherIcon.classList.add(`owf-${data.weather[0].id}`);
  temperature.textContent = `${Math.floor(data.main.temp)}°C`;
  weatherDescription.textContent = data.weather[0].description;
  wind.textContent = `${wSpd}: ${Math.floor(data.wind.speed)} ${metric}`;
  humidity.textContent = `${hum}: ${data.main.humidity}%`;
  } else {
    alert('Wrong city name');
    localStorage.removeItem('city');
  }
}

const getWeatherLang = () => {
  if (flag.classList.contains('en')) {
    getWeather('en', 'Wind speed', 'Humidity', 'm/s');
    
  } else {
    getWeather('ru', 'Скорость ветра', 'Влажность', 'м/с');
  }
};

getWeatherLang();

export const newAddLocalStorage = () => {
  // Gets input value
  if (!localStorage.getItem('city') && flag.classList.contains('en')) {
    city.value = 'Minsk';
  } else if (!localStorage.getItem('city') && flag.classList.contains('ru')) {
    city.value = 'Минск';
  } else {
    city.value = localStorage.getItem('city');
  }
};

document.addEventListener("DOMContentLoaded", newAddLocalStorage);

city.addEventListener('change', () => {
  localStorage.setItem('city', city.value);
  if (!city.value || city.value === '' || city.value === null) {
    alert('Wrong city name');
  } else {
    getWeatherLang();
  }
});

