"use strict";

const getTime = () => {
  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let ampm = hours >= 12 ? 'PM' : 'AM';
  // Set time
  // hours = hours % 12;
  // hours = hours ? hours : 12; // the hour '0' should be '12'
  hours = hours < 10 ? '0'+ hours : hours;
  minutes = minutes < 10 ? '0'+ minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  document.getElementById('time').innerHTML = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
};

export const getDate = (lang = "en-EN") => {
  const date = new Date();
  //Set date
  let weekdayName = date.toLocaleString(lang, { weekday: 'long' });
  let monthName = date.toLocaleString(lang, {month: 'long'});
  let dayNumber = date.toLocaleString(lang, { day: 'numeric' });

  document.getElementById('date').innerHTML = weekdayName + ',' + ' ' + monthName + ' ' + dayNumber;

};

setInterval(getTime, 1000);
getDate();


