!function(){var e,n,t,o={form:document.querySelector(".form"),delayInput:document.querySelector('input[name="delay"]'),stepInput:document.querySelector('input[name="step"]'),amountInput:document.querySelector('input[name="amount"]'),submitBtn:document.querySelector(".form button")};function u(e,n){var t=Math.random()>.3;new Promise((function(o,u){return setTimeout((function(){t?o({position:e,delay:n}):u({position:e,delay:n})}),n),{position:e,delay:n}})).then((function(e){var n=e.position,t=e.delay;console.log("✅ Fulfilled promise ".concat(n," in ").concat(t,"ms"))})).catch((function(e){var n=e.position,t=e.delay;console.log("❌ Rejected promise ".concat(n," in ").concat(t,"ms"))}))}o.form.addEventListener("submit",(function(a){a.preventDefault(),e=Number(o.delayInput.value),t=Number(o.amountInput.value),n=Number(o.stepInput.value);for(var i=1,c=1;c<=t;c++)u(i,e),console.log("position:",i+" delay: ",e),e+=n,i+=1}))}();
//# sourceMappingURL=03-promises.5b29761b.js.map
