function rangeSlide(value){
  const followers = document.getElementById("current-value").innerHTML = calcVal(value);
  return followers;
}

let newVal;
function calcVal(value){
  if(value/1000 >= 1){
    newVal = value/1000;
    return (newVal)+'K';
  } else{
    newVal=value;
    return newVal;
  }
  
}

function rangeSlideTwo(value){
  const posts = document.getElementById("current-value-two");
  posts.innerHTML = value;
  
  return posts;
}

function money(value){
  const money = document.getElementById("fig-1");
  money.innerHTML = value*2;

}

function moneyTwo(value){
  const money = document.getElementById("fig-2");
  money.innerHTML = value*3;

}



const rangeInput = document.getElementById("rangeSlider");
function updateBackground(){
  const value = rangeInput.value;
  const max = rangeInput.max;
  const percentage = (value/max) * 100;

  rangeInput.style.background = `linear-gradient(to right,#f96 ${percentage-12}%, #ddd ${percentage}%)`;
}

rangeInput.addEventListener('input',updateBackground);

updateBackground();

const rangeInputTwo = document.getElementById("rangeSlidertwo");
function updateBackgroundTwo(){
  const value = rangeInputTwo.value;
  const max = rangeInputTwo.max;
  const percentage = (value/max) * 100;

  rangeInputTwo.style.background = `linear-gradient(to right,#f96 ${percentage-12}%, #ddd ${percentage}%)`;
}

rangeInputTwo.addEventListener('input',updateBackgroundTwo);
updateBackgroundTwo();




