// let greetingTranslation = {
//   en: "Good morning",
//   ru: "Доброе утро"
// };
"use strict";

import {greetingName} from './greeting.js';
import {greetingTranslation} from './greeting.js';
import { getWeather } from './weather.js';
import { input } from './greeting.js';
import { getDate } from './clock&calendar.js';
import { newAddLocalStorage } from './weather.js';
import { getQuotesLang } from './quotes.js';

const toggle=document.getElementById("toggle");
export const flag=document.getElementById("flag");

toggle.onclick=switchLang;

function switchLang(){
  //en to ru
  if (flag.classList.contains('en')) {
    flag.classList.remove('en');
    flag.classList.add('ru');
    flag.src="https://flagicons.lipis.dev/flags/4x3/ru.svg";

    greetingName(greetingTranslation.ru);
    getWeather('ru', 'Скорость ветра', 'Влажность', 'м/с');
    input.placeholder = "[Введите имя]";
    getDate('ru-RU');
    newAddLocalStorage();
    getQuotesLang();
  }
  //ru to en
  else {
    flag.classList.remove('ru');
    flag.classList.add('en');
    flag.src="https://flagicons.lipis.dev/flags/4x3/gb.svg";

    greetingName(greetingTranslation.en);
    getWeather('en', 'Wind speed', 'Humidity', 'm/s');
    input.placeholder = "[Enter name]";
    getDate('en-EN');
    newAddLocalStorage();
    getQuotesLang();
  }
}