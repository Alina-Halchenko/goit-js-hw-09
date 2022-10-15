import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const refs = {
  datePicker: document.querySelector('#datetime-picker'),
  startBtn: document.querySelector('[data-start]'),
  daysCounter: document.querySelector('[data-days]'),
  hrCounter: document.querySelector('[data-hours]'),
  minCounter: document.querySelector('[data-minutes]'),
  secCounter: document.querySelector('[data-seconds]'),
}
const date = new Date();

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log("inside the library", selectedDates[0]);
  },
};
const dataPickr = flatpickr('#datetime-picker', options);

const timer = {
  start() {
    const counterdownDate = dataPickr.selectedDates[0];

    setInterval(() => {
      const finishDate = Date.now();
      const timeDifference = counterdownDate - finishDate;
      const {days, hours, minutes, seconds} = convertMs(timeDifference);
      updateCounterdown({days, hours, minutes, seconds});
    }, 1000);
  },
};

refs.startBtn.disabled = true;

refs.datePicker.addEventListener('input', ()=>{
console.log('outside of the library', dataPickr.selectedDates[0]);
if(dataPickr.selectedDates[0] <= date){
  window.alert("Please choose a date in the future");
} else {
  refs.startBtn.disabled = false;
}});

refs.startBtn.addEventListener('click', ()=> {
  timer.start();
})


function addLeadingZero(value){
  return String(value).padStart(2, '0');
}



function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

function updateCounterdown({days, hours, minutes, seconds}){
  refs.daysCounter.textContent = `${days}`;
  refs.hrCounter.textContent = `${hours}`;
  refs.minCounter.textContent = `${minutes}`;
  refs.secCounter.textContent = `${seconds}`;
}


console.log(refs.daysCounter.textContent)