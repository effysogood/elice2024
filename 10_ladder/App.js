let ladder = {
  step: 0,
  up() {
    return this.step++;
  },
  down() {
    return this.step--;
  },
  showstep() {
    return alert(this.step);
  },
};

export default ladder;
