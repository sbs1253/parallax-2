/* eslint-disable no-undef */

/* 트윈맥스 설명
https://greensock.com/docs/

tweenMax easing
https://greensock.com/docs/v3/Eases

멋진 페이지 모음
https://greensock.com/showcase/
*/
let windowWidth;
let windowHeight;

window.onload = () => {
  const cards = document.querySelectorAll('.cardItem');
  const button1 = document.querySelectorAll('button')[0];
  const button2 = document.querySelectorAll('button')[1];

  // 초기화
  function cardSetting() {
    cards.forEach((item, i) => {
      // console.log(item, i);

      TweenMax.to(item, 1, {
        top: windowHeight / 2 - i * 40,
        left: windowWidth / 2 + (i * 40 - 200),
        rotation: 0,
        ease: Power3.easeInOut,
        delay: i * 0.2,
      });
    });
  }
  function resize() {
    windowHeight = window.innerHeight;
    windowWidth = window.innerWidth;
    cardSetting();
  }

  function cardRandom() {
    cards.forEach((item, i) => {
      TweenMax.to(item, 1, {
        top: Math.random() * windowHeight,
        left: Math.random() * windowWidth,
        rotation: Math.random() * 180,
        ease: Power4.easeInOut,
        delay: i * 0.1,
      });
    });
  }

  button1.addEventListener('click', () => {
    cardRandom();
  });
  button2.addEventListener('click', () => {
    cardSetting();
  });
  window.addEventListener('resize', () => {
    resize();
  });

  resize();
};
