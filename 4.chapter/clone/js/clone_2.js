/* eslint-disable*/
/* section의 높이가 계속 아래로 늘어남 => top.style.transform이 section 을 변경했기때문 => section->h1 tag scope 로 변경*/
window.onload = () => {
  let starBg = document.querySelector('.starBg');
  let top = document.querySelector('.top');
  let titleText = top.querySelectorAll('div');
  let card = document.querySelector('.card');
  let topBtn = document.querySelector('.topBtn');
  window.addEventListener('scroll', () => {
    const scroll = this.scrollY;
    // console.log(scroll);
    starBg.style.transform = `translateY(${-scroll / 3}px)`;
    top.style.transform = `translateY(${scroll / 2}px)`;
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
