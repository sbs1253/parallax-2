window.onload = () => {
  const starBg = document.querySelector('.star_1');
  const titleText = document.querySelector('h1');
  let scrollSpeed;
  window.addEventListener('scroll', () => {
    console.log(window.scrollY);
    scrollSpeed = window.scrollY;
    // console.log(document.body.scrollTop);
    // console.log(document.body.clientHeight);
    starBg.style.transform = ` translateY(${scrollSpeed * 0.1})`;
    titleText.style.transform = ` translateY(${scrollSpeed * 0.2})`;
  });
};
