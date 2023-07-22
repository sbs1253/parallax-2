/* eslint-disable*/

window.onload = function () {
  let starBg = document.querySelector('.starBg');
  let title = document.querySelector('.title');
  let titleDiv = title.querySelectorAll('div');
  let topBtn = document.querySelector('.topBtn');

  window.addEventListener('scroll', () => {
    let scroll = this.scrollY;
    starBg.style.transform = `translateY(${-scroll / 3}px)`;
    title.style.transform = `translateY(${scroll / 2}px)`;
  });
  // 텍스트 모션
  for (let i = 0; i < titleDiv.length; i++) {
    let _text = titleDiv[i];
    // console.log(_text);

    gsap.from(_text, 1, {
      autoAlpha: 0,
      delay: Math.random() * 1,
      ease: Power3.easeInOut,
    });
  }

  gsap.to(window, 2, {
    scrollTo: {
      y: '.bottom',
      // autoKill: true,
      // 애니메이션 겹칠때 효과제거해줌
    },
    delay: 1.7,
    // repeat: -1, 무한 반복
    ease: Power4.easeInOut,
  });

  gsap.from('.bottom', 2.5, {
    scale: 0.7,
    y: 100,
    delay: 2.2,
    ease: Power3.easeInOut,
  });
  topBtn.addEventListener('click', () => {
    gsap.to(window, 1.5, {
      scrollTo: {
        y: 0,
        autoKill: true,
      },
      ease: Power3.easeInOut,
    });
  });
};
