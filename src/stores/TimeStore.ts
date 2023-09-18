class TimeStore {
  time: number = 0;

  tickTime: number;

  timer;

  constructor(tickTime = 0.1) {
    this.tickTime = tickTime;

    this.timer = setInterval(this.tick.bind(this), 1000 * this.tickTime);
  }

  tick() {
    this.time += this.tickTime;
  }
}

export default TimeStore;
