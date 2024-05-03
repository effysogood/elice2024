import App from './App';

const run = () => {
  window.addEventListener('DOMContentLoaded', () => {
    App();
  });

  // up & down 제공하는 객체 ladder
  App.up();
  App.down();
  App.down();
  App.showstep();
};

run();
