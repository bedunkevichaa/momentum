"use strict";
// Greeting phrase
export let greetingTranslation = {
  en: ["Good morning", "Good afternoon", "Good evening", "Good night"],
  ru: ["Доброе утро", "Добрый день", "Добрый вечер", "Доброй ночи"]
};


export function greetingName(lang = greetingTranslation.en) {
  const date = new Date();
  let hours = date.getHours();

  hours === 6 || hours < 12 ? document.getElementById('greeting').textContent = lang[0] :
    hours === 12 || hours < 18 ? document.getElementById('greeting').textContent = lang[1] :
      hours === 18 || hours < 24 ? document.getElementById('greeting').textContent = lang[2] : document.getElementById('greeting').textContent = lang[3];


}

//setInterval(greetingName, 1000);
greetingName();

//name to LocalStorage
export let input = document.getElementById('name');
let inputValue = '';

input.addEventListener('input', updateValue);
function updateValue(e) {
  inputValue = e.target.value;
}

window.addEventListener("unload", function() {
  if (inputValue || input.value.trim().length === 0) {
    localStorage.setItem('user', inputValue);
  }
});

const addLocalStorage = () => {
  // Gets input value
  input.value = localStorage.getItem('user');
};

document.addEventListener("DOMContentLoaded", addLocalStorage);


