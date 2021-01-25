class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
  }

  start() {
    this.updateClockface(0);
    setInterval(() => {
      const currentTime = Date.now();

      let deltaTime = this.targetDate - currentTime;
      this.updateClockface(deltaTime);
    }, 1000);
  }

  updateClockface(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));

    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );

    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));

    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    document.querySelector(
      this.selector,
    ).textContent = `${days}:${hours}:${mins}:${secs}`;
  }

  pad(value) {
    return String(value).padStart(2, '0');
  }
}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('dec 31, 2021'),
});

timer.start();
