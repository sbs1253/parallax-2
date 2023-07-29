/* eslint-disable*/
window.onload = () => {
  const contentWrap = document.querySelector('.contentWrap');
  // const back = document.querySelector('.back');
  const btn = document.querySelector('button');

  let x = 0;
  let y = 0;
  let mx = 0;
  let my = 0;

  function mobileChk() {
    var mobileKeyWords = new Array(
      'Android',
      'iPhone',
      'iPad',
      'BlackBerry',
      'Windows CE',
      'SAMSUNG',
      'LG',
      'MOT',
      'SonyEricsson'
    );
    for (var info in mobileKeyWords) {
      if (navigator.userAgent.match(mobileKeyWords[info]) != null) {
        return true;
      }
    }
    return false;
  }

  function iosChk() {
    var mobileKeyWords = new Array('iPhone', 'iPad');
    for (var info in mobileKeyWords) {
      if (navigator.userAgent.match(mobileKeyWords[info]) != null) {
        return true;
      }
    }
    return false;
  }
  let isMobile = mobileChk();
  let isIos = iosChk();

  function loop() {
    mx += (x - mx) * 0.001;
    my += (y - my) * 0.001;
    // console.log(mx, my);

    contentWrap.style.transform = `translate(-50%,-50%) rotateY(${
      -mx / 10
    }deg) rotateX(${my / 10}deg)`;
    requestAnimationFrame(loop);
  }

  function loopMobile() {
    mx += (x - mx) * 0.1;
    my += (y - my) * 0.1;
    contentWrap.style.transform =
      'translate3d(-50%, -50%, 0) rotateX(' +
      (my - 50) +
      'deg) rotateY(' +
      mx +
      'deg)';
    window.requestAnimationFrame(loopMobile);
  }

  window.addEventListener('mousemove', (e) => {
    x = e.clientX - window.innerWidth / 2;
    y = e.clientY - window.innerHeight / 2;
    // console.log(x);
    loop();
  });
  btn.addEventListener('click', () => {
    btn.classList.add('dimd');
    contentWrap.classList.add('active');
    if (isMobile) {
      //모바일이면 실행
      if (isIos) {
        // ios일때만 실행
        // ios는 requestPermissions 라고 권한을 따로 받아야함
        DeviceOrientationEvent.requestPermissions()
          .then(() => {
            mobileOrientationChk();
          })
          .catch(console.error);
      } else {
        mobileOrientationChk();
      }

      function mobileOrientationChk() {
        window.addEventListener('deviceorientation', (e) => {
          x = e.gamma;
          y = e.beta;
          //디바이스가 움직임 감지될때 실행
        });
        loopMobile();
      }
    } else {
      //pc면 실행

      window.addEventListener('mousemove', function (e) {
        x = e.clientX - window.innerWidth / 2;
        y = e.clientY - window.innerHeight / 2;
        //마우스 위치값을 화면의 정가운데가 0,0이 되도록 맞춤
      });
    }
  });
};
