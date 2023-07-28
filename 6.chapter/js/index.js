window.onload = () => {
  const contentWrap = document.querySelector('.contentWrap');
  // const back = document.querySelector('.back');
  let x = 0;
  let y = 0;
  let mx = 0;
  let my = 0;
  function loop() {
    mx += (x - mx) / 10;
    my += (y - my) / 10;

    contentWrap.style.transform = `translate(-50%,-50%) rotateY(${-mx}deg) rotateX(${my}deg)`;
    requestAnimationFrame(loop);
  }
  window.addEventListener('mousemove', (e) => {
    x = e.clientX - window.innerWidth / 2;
    y = e.clientY - window.innerHeight / 2;
    // console.log(x);
    loop();
  });
};
