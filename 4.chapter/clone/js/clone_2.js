/* eslint-disable*/

window.onload = () => {
  let starBg = document.querySelector('.starBg');
  let title = document.querySelector('.title');
  let titleText = title.querySelectorAll('div');
  let card = document.querySelector('.card');
  let topBtn = document.querySelector('.topBtn');
  window.addEventListener('scroll', () => {
    const scroll = this.scrollY;
    // console.log(scroll);
    starBg.style.transform = `translateY(${-scroll / 3}px)`;
    title.style.transform = `translateY(${scroll / 2}px)`;
  });
  for (let text of titleText) {
    // console.log(text);
    gsap.from(text, 1, {
      autoAlpha: 0,
      delay: Math.random() * 1,
      ease: Power3.easeInOut,
    });
  }
  // for (let i = 0; i < titleText.length; i++) {
  //   let _text = titleText[i];
  //   // console.log(_text);
  //   gsap.from(titleText[i], 1, {
  //     autoAlpha: 0,
  //     delay: Math.random() * 1,
  //     ease: Power3.easeInOut,
  //   });
  // }

  gsap.from(card, 2, {
    scale: 0.5,
    delay: 2,
    y: 100,
    ease: Power3.easeInOut,
  });

  gsap.to(window, 2, {
    scrollTo: {
      y: card,
    },
    delay: 1.5,
    ease: Power4.easeInOut,
  });
  topBtn.addEventListener('click', () => {
    gsap.to(window, 1, {
      scrollTo: {
        y: 0,
      },
      ease: Power4.easeInOut,
    });
  });
};
