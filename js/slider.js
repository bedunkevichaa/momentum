const body = document.querySelector('body');
const slideNext = document.querySelector('.slide-next');
const slidePrev = document.querySelector('.slide-prev');
let randomNum;

const getTimeOfDay = () => {
  const date = new Date();
  let hours = date.getHours();

  return hours === 6 || hours < 12 ? 'morning' :
         hours === 12 || hours < 18 ? 'afternoon' :
         hours === 18 || hours < 24 ? 'evening' : 'night';
  
};

const getRandomNum = () => {
  randomNum = Math.floor(Math.random() * (21 - 1) + 1);
};

getRandomNum();

const setBg = () => {
  let timeOfDay = getTimeOfDay();
  let bgNum = randomNum;
  const img = new Image();
  
  if (bgNum < 10) {
    bgNum = '0' + bgNum;
  }
  img.src = `https://raw.githubusercontent.com/bedunkevichaa/momentum-images/assets/images/${timeOfDay}/${bgNum}.jpg`;
  img.addEventListener('load', () => {
    body.style.backgroundImage = `url('${img.src}')`;
  });
};

//setBg();

async function getLinkToImage() {
  let timeOfDay = getTimeOfDay();
  const url = `https://api.unsplash.com/photos/random?orientation=landscape&query=${timeOfDay}&client_id=GILMzb56tKWFz9klMhdRsUXH9dsyCWS-7IPUInmSFG4`;
  const res = await fetch(url);
  const data = await res.json(); 
 
  const img = new Image();
  img.src = data.urls.regular;
  img.addEventListener('load', () => {
    body.style.backgroundImage = `url('${img.src}')`;
  });
}

getLinkToImage();

const getSlideNext = () => {
  randomNum + 1 < 20 ? randomNum++ : randomNum = 1;
  setBg();
};

const getSlidePrev = () => {
  randomNum - 1 > 1 ? randomNum-- : randomNum = 20;
  setBg();
};

slideNext.addEventListener('click', getSlideNext);
slidePrev.addEventListener('click', getSlidePrev);
