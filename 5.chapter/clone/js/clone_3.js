/*eslint-disable*/
window.onload = () => {
  const body = document.querySelector('body');
  const section = document.querySelector('section');
  const btnAll = document.querySelectorAll('button');
  const bgColor = [
    'linear-gradient(135deg, #f6f8f9 0%,#f5f7f9 100%) ',
    'linear-gradient(135deg, #e4f5fc 0%,#2ab0ed 100%)',
    'linear-gradient(135deg, #fefcea 0%,#f1da36 100%)',
  ];
  let pageNum;
  let totalItem = 100;
  let item;
  TweenMax.from('h1', 1, {
    top: -50,
    autoAlpha: 0,
    delay: 0.2,
    ease: Power3.easeOut,
  });
  TweenMax.from('div', 1, {
    autoAlpha: 0,
    scale: 0.2,
    delay: 0.2,
    ease: Power3.easeOut,
  });
  function toggle(idx) {
    btnAll[idx].addEventListener('click', () => {
      pageNum = idx;
      for (let i = 0; i < btnAll.length; i++) {
        if (pageNum === i) {
          btnAll[i].classList.add('active');
        } else {
          btnAll[i].classList.remove('active');
        }
      }
      setItem();
    });
  }
  function resizing() {
    windowHeight = window.innerHeight;
    windowWidth = window.innerWidth;
    setItem();
  }
  function setItem() {
    item = document.querySelectorAll('.item');
    body.style.background = `${bgColor[pageNum]}`;
    TweenMax.killTweensOf(item);

    for (let i = 0; i < totalItem; i++) {
      if (pageNum === 0) {
        TweenMax.to(item[i], 1, {
          top: windowHeight / 2 + Math.sin(i / 3) * 30,
          autoAlpha: 1,
          left: i * 15,
          scale: 0.7,
          delay: i / 100,
          ease: Power3.easeout,
        });
      } else if (pageNum === 1) {
        TweenMax.to(item[i], 1, {
          autoAlpha: 1,
          top: windowHeight / 2 + Math.cos(i / 3) * 30,
          left: i * 15,
          delay: 'random(0, 0.5)',
          scale: 0.7,
          ease: Power3.easeout,
        });
      } else if (pageNum === 2) {
        TweenMax.to(item[i], 1, {
          top: windowHeight / 2 + Math.tan(i / 25) * 10,
          autoAlpha: 1,
          left: i * 15,
          delay: 'random(0, 1.5)',
          scale: 0.7,
          ease: Power3.easeout,
        });
      }
    }
  }

  for (let i = 0; i < totalItem; i++) {
    item = document.createElement('span');
    item.setAttribute('class', 'item');
    item.style.top = window.innerHeight / 2 + 'px';
    item.style.left = window.innerWidth / 2 + 'px';
    item.innerHTML = i;
    section.append(item);
  }

  for (let i = 0; i < btnAll.length; i++) {
    toggle(i);
  }

  window.addEventListener('resize', () => {
    resizing();
  });
  resizing();
};
//  마우스 위치에 따른 숫자 따라가기
