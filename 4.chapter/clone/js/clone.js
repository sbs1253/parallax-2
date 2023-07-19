window.onload = () => {
  const starBg = document.querySelector('.star_1');
  const titleText = document.querySelector('h1');
  let scrollSpeed;

  function loop() {
    starBg.style.transform = `translateY(${scrollSpeed * 0.3}px)`;
    titleText.style.transform = `translate(-50%,${scrollSpeed * 0.5}px)`;
    // starBg.style.transform = 'translateY(' + -scrollSpeed / 3 + 'px)';
    // titleText.style.transform = 'translateY(' + scrollSpeed / 1.7 + 'px)';
    requestAnimationFrame(loop);
  }
  window.addEventListener('scroll', () => {
    scrollSpeed = this.scrollY;
    // console.log(document.body.scrollTop);
    // console.log(document.body.clientHeight);
  });

  loop();
};
