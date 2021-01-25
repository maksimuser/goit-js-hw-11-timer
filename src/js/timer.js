const refs = {
  timer: document.querySelector('#timer-1'),
};

const timer = {
  start() {
    const targetDate = new Date('Jul 21, 2021');

    setInterval(() => {
      const currentDate = Date.now();
      let deltaTime = targetDate - currentDate;
      updateClockface(deltaTime);
    }, 1000);
  },
};

timer.start();

function updateClockface(time) {
  const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
  );
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

  refs.timer.textContent = `${days}:${hours}:${mins}:${secs}`;
}

function pad(value) {
  return String(value).padStart(2, '0');
}
