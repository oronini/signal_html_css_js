'use strict';
(() => {
  const signalBtn = document.querySelectorAll('button[data-signal]');

  const signalReset = () => {
    signalBtn.forEach((elm) => {
      elm.dataset.signal = 'false';
    });
  };

  signalBtn.forEach((elm) => {
    elm.addEventListener('click', () => {
      signalReset();
      elm.dataset.signal = 'true';
    });
  });
})();
