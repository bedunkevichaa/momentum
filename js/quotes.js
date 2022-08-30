"use strict";
import { flag } from "./translate.js";

const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const changeQuote = document.querySelector('.change-quote');
let random;

async function getQuotes() {  
  const quotes = 'data.json';
  const res = await fetch(quotes);
  const data = await res.json(); 
  random = data[Math.floor(Math.random() * data.length)];

  if (flag.classList.contains('en')) {
    quote.textContent = `“${random.text[1]}.”`;
  author.textContent = random.author[1];
  } else {
    quote.textContent = `“${random.text[0]}.”`;
    author.textContent = random.author[0];
  }
}

export const getQuotesLang = () => {
  if (flag.classList.contains('en')) {
    quote.textContent = `“${random.text[1]}.”`;
  author.textContent = random.author[1];
  } else {
    quote.textContent = `“${random.text[0]}.”`;
    author.textContent = random.author[0];
  }
};

document.addEventListener("DOMContentLoaded", getQuotes);
changeQuote.addEventListener('click', getQuotes);


