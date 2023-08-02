/* eslint-disable camelcase */
/* eslint-disable no-undef */
window.onload = () => {
  let windowWidth;
  let windowHeight;
  const cards = document.querySelectorAll('.cardItem');
  const buttons = document.querySelectorAll('button');

  TweenMax.set('section', { perspective: 400 });

  function resetBtn() {
    cards.forEach((item, i) => {
      TweenMax.to(item, 1, {
        top: windowHeight / 2 - i * 50,
        left: windowWidth / 2 + (i * 50 - 200),
        rotationX: 0,
        rotationY: 0,
        rotationZ: 0,

        ease: Power3.easeInOut,
        delay: i * 0.2,
      });
    });
  }
  function random_1() {
    cards.forEach((item, i) => {
      TweenMax.to(item, 1, {
        top: windowHeight / 2 - i * 50,
        left: windowWidth / 2 + +(i * 50 - 200),
        rotationX: 'random(-60,60)',
        rotationY: 'random(-60,60)',
        rotationZ: 'random(-60,60)',
        delay: i * 0.2,
        ease: Power3.easeInOut,
      });
    });
  }
  function random_2() {
    cards.forEach((item, i) => {
      TweenMax.to(item, 1, {
        top: (windowHeight - 200) * Math.random(),
        left: (windowWidth - 200) * Math.random(),
        rotationX: 'random(0,30)',
        rotationY: 'random(0,30)',
        rotationZ: 'random(0,30)',
        delay: i * 0.2,
        ease: Power3.easeInOut,
      });
    });
  }
  function random_3() {
    cards.forEach((item, i) => {
      TweenMax.to(item, 1, {
        top: (windowHeight - 300) * Math.random() * 1.2 - 50,
        left: (windowWidth - 300) * Math.random() * 1.2 - 50,
        rotationX: 'random(-100,100)',
        rotationY: 'random(-100,100)',
        rotationZ: 'random(-100,100)',
        delay: i * 0.2,
        ease: Power3.easeInOut,
      });
    });
  }

  function resizing() {
    windowHeight = window.innerHeight;
    windowWidth = window.innerWidth;
    resetBtn();
  }
  window.addEventListener('resize', () => {
    resizing();
  });
  buttons[0].addEventListener('click', () => {
    resetBtn();
  });
  buttons[1].addEventListener('click', () => {
    random_1();
  });
  buttons[2].addEventListener('click', () => {
    random_2();
  });
  buttons[3].addEventListener('click', () => {
    random_3();
  });
  resizing();
};
