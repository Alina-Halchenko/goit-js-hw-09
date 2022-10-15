const refs = {
body: document.querySelector('body'),
startBtn: document.querySelector('[data-start]'),
stopBtn: document.querySelector('[data-stop]'),
};
let changeColorTimerId = null;
let isActive = false;

refs.startBtn.addEventListener('click', ()=> {
if(isActive){
  return
};
// console.log('times is on');
changeColor();
});

function changeColor(){
  changeColorTimerId = setInterval(() => {
    isActive = true;
    refs.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

refs.stopBtn.addEventListener('click', ()=> {
  clearInterval(changeColorTimerId);
  isActive = false;
})

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

