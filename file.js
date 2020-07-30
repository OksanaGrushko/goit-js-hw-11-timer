const refs = {
  days: document.querySelector('span[data-value="days"]'),
  hours: document.querySelector('span[data-value="hours"]'),
  minutes: document.querySelector('span[data-value="mins"]'),
  seconds: document.querySelector('span[data-value="secs"]'),
};

class CountdownTimer {
  constructor(selector, targetDate) {
    this.selector = selector;
    this.targetDate = targetDate;
  }

  getTime() {
    this.timerId = setInterval(() => {
      // дата на текущее время
      const currentDate = Date.now();
      const targetDate = Date.parse(this.targetDate);
      const deltaTime = targetDate - currentDate;
      const date = new Date(deltaTime);
      updateClockface(date);
    }, 1000);
  }
}

function updateClockface(time) {
  const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
  console.log(`${days}:${hours}:${mins}:${secs}`);
  refs.days.textContent = `${days}`;
  refs.hours.textContent = `${hours}`;
  refs.minutes.textContent = `${mins}`;
  refs.seconds.textContent = `${secs}`;
}
// ф-цыя для того что бы было не меньше 2х чисел (не 3сек, а 03сек)
function pad(value) {
  return String(value).padStart(2, "0");
}

const timer1 = new CountdownTimer("#timer-1", "July 17, 2021");
timer1.getTime();
