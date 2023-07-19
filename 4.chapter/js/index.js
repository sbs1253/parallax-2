/* eslint-disable */
//https://www.youtube.com/watch?v=lyf7UkkcI1I
//[스타벅스 현대카드] 별이 쏟아지는, 스타벅스 현대카드]

window.onload = function () {
  let starBg = document.querySelector('.starBg');
  let title = document.querySelector('.title');

  //스크롤 이벤트
  window.addEventListener('scroll', function () {
    // scrollTop = document.documentElement.scrollTop;
    let scroll = this.scrollY;
    console.log(scroll);
    starBg.style.transform = `translateY(${-scroll / 3}px)`;
    title.style.transform = `translateY(${scroll / 2}px)`;
  });
  // 2초뒤 스크롤 이동
  setTimeout(() => {
    window.scrollTo({
      top: document.querySelector('.bottom').offsetTop,
      behavior: 'smooth',
    });
  }, 2000);
};
