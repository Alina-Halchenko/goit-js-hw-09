const refs = {
  form: document.querySelector('.form'),
  delayInput: document.querySelector('input[name="delay"]'),
  stepInput: document.querySelector('input[name="step"]'),
  amountInput: document.querySelector('input[name="amount"]'),
  submitBtn: document.querySelector('.form button')
}

let delay;
let amount;
let currentPosition;

let formData = {};
refs.form.addEventListener('submit', onSubmitEvt);

function onSubmitEvt(evt){
  evt.preventDefault();
    // const {elements: {delay, step, amount}} = evt.currentTarget;
    // console.log(delay.value, step.value, amount.value);
    delay = Number(refs.delayInput.value);
    currentPosition = Number(refs.amountInput.value);
    step = Number(refs.stepInput.value);
    let position = 1;

    for(let i = 1; i <= currentPosition; i++){
      createPromise(position, delay);
      console.log('position: ', position + ' delay: ', delay)
      delay += step;
      position +=1;
    }
};


function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({position, delay});
      } else {
        reject({position, delay});
      }
    }, delay);

    return {position, delay};
  });


  promise.then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });

