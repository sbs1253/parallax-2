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
      setItem();
    });
  }
  function resizing() {
    windowHeight = window.innerHeight;
    windowWidth = window.innerWidth;
    setItem();
  }
  function setItem() {
    body.style.background = `${bgColor[pageNum]}`;

    TweenMax.killTweensOf(item);
    if (pageNum === 0) {
    } else if (pageNum === 1) {
    } else if (pageNum === 2) {
    }
  }
  for (let i = 0; i < totalItem; i++) {
    item = document.createElement('span');
    item.setAttribute('class', 'item');
    item.innerHTML = i;
    section.append(item);
  }
  for (let i = 0; i < btnAll.length; i++) {
    toggle(i);
    // 버튼 액티브 지우기
    if (pageNum === i) {
      console.log('1');
      btnAll[i].classList.add('active');
    } else {
      btnAll[i].classList.remove('active');
    }
  }

  window.addEventListener('resize', () => {
    resizing();
  });
  resizing();
};
// 버튼 액티브 지우기 만들고 숫자 위치 함수 완성할것
