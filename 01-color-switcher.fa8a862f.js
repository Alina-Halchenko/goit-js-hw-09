!function(){var t={body:document.querySelector("body"),startBtn:document.querySelector("[data-start]"),stopBtn:document.querySelector("[data-stop]")},n=null,e=!1;t.startBtn.addEventListener("click",(function(){e||(n=setInterval((function(){e=!0,t.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3))})),t.stopBtn.addEventListener("click",(function(){clearInterval(n),e=!1}))}();
//# sourceMappingURL=01-color-switcher.fa8a862f.js.map
