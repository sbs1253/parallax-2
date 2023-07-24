window.onload = () => {
  let windowWidth;
  let windowHeight;
  const cards = document.querySelectorAll('.cardItem');
  const buttons = document.querySelectorAll('button');

  function resetBtn() {
    cards.forEach((item, i) => {
      console.log(i);
      TweenMax.to(item, 1, {
        top: windowHeight / 2 - i * 50,
        left: windowWidth / 2 - 200 + i * 50,
        delay: i * 0.2,
        ease: Power3.easeInOut,
      });
    });
  }
  function randomBtn() {
    cards.forEach((item, i) => {
      TweenMax.to(item, 1, {
        top: Math.random() * (windowHeight - 100),
        left: Math.random() * (windowWidth - 200),
        rotation: Math.random() * 180,
        delay: i * 0.1,
        ease: Power4.easeInOut,
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
    randomBtn();
  });
  buttons[1].addEventListener('click', () => {
    resetBtn();
  });
  resizing();
};
