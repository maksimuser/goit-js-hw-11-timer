class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.start();
  }

  start() {
    this.updateClockface(0);
    setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = this.targetDate - currentTime;
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
    ).children[0].children[0].textContent = `${days}`;

    document.querySelector(
      this.selector,
    ).children[1].children[0].textContent = `${hours}`;

    document.querySelector(
      this.selector,
    ).children[2].children[0].textContent = `${mins}`;

    document.querySelector(
      this.selector,
    ).children[3].children[0].textContent = `${secs}`;
  }

  pad(value) {
    return String(value).padStart(2, '0');
  }
}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('dec 31, 2021'),
});

const timer2 = new CountdownTimer({
  selector: '#timer-2',
  targetDate: new Date('Jan 01, 2025'),
});

const timer3 = new CountdownTimer({
  selector: '#timer-3',
  targetDate: new Date('May 09, 2021'),
});

const timer4 = new CountdownTimer({
  selector: '#timer-4',
  targetDate: new Date('feb 19, 2023'),
});
