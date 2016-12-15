(function(){
  "use strict";

const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');
const hand = document.querySelector('.hand');

function setDate(){
  const now = new Date();
  // console.log(now);
  const seconds = now.getSeconds();
  // console.log(seconds);
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  // if (secondsDegrees == 360) {
  //   hand.style.transition = ``;
  // };
  // console.log(secondsDegrees)
  const minutes = now.getMinutes();
  // console.log(minutes);
  const minutesDegrees = ((minutes/60) * 360) + 90;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
  const hours = now.getHours();
  // console.log(minutes);
  const hoursDegrees = ((hours/12) * 360) + 90;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);
}());
