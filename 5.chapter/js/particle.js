/* eslint-disable */
window.onload = () => {
  const body = document.querySelector('body');
  const btnAll = document.querySelectorAll('button');
  let pageNum = 0;
  let windowHeight;
  let windowWidth;
  let bgColorArr = ['#2eccc4', '#ea204f', '#20a9ea'];
  for (let i = 0; i < btnAll.length; i++) {
    ((idx) => {
      btnAll[idx].onclick = () => {
        pageNum = idx;
        // console.log(pageNum);
        motionSetting();
      };
    })(i);
  }

  // for (let i = 0; i < btnAll.length; i++) {
  //   btnAll[i].onclick = () => {
  //     pageNum = i;
  //     console.log('1');
  // motionSetting();
  //   };
  // }

  TweenMax.from('h1', 1, {
    top: -50,
    autoAlpha: 0,
    ease: Power3.easeOut,
  });

  btnAll.forEach((item, i) => {
    TweenMax.from(item, 0.4, {
      top: 100,
      autoAlpha: 0,
      ease: Power3.easeOut,
      delay: i * 0.1 + 1,
    });
  });

  TweenMax.set('section', { perspective: 400 });

  //textItem 100개 만들기
  let item;
  let section = document.querySelector('section');

  let totalNum = 100;

  for (let i = 0; i < totalNum; i++) {
    item = document.createElement('div');
    item.setAttribute('class', 'textItem');
    item.style.top = windowHeight / 2 + 'px';
    item.style.left = windowWidth / 2 + 'px';
    item.innerHTML = i;
    section.append(item);
  }
  let textItem = document.querySelectorAll('.textItem');
  function motionSetting() {
    // background color
    body.style.background = bgColorArr[pageNum];

    for (let i = 0; i < btnAll.length; i++) {
      // 전체 버튼 비활성
      if (pageNum == i) {
        // 버튼활성
        btnAll[i].classList.add('active');
      } else {
        btnAll[i].classList.remove('active');
      }
    }
    // 중복된거 없애기
    TweenMax.killTweensOf(textItem);
    if (pageNum == 0) {
      // center
      textItem.forEach((item, i) => {
        TweenMax.to(item, 1, {
          top: Math.random() * (windowHeight - 150) + 60,
          left: Math.random() * (windowWidth - 80) + 20,
          rotationX: 0,
          rotationY: 0,
          rotationZ: 0,
          autoAlpha: 'random(.1,1)',
          scale: 0.5,
          ease: Power4.easeOut,
          delay: 'random(0,.5)',
        });
      });
    } else if (pageNum == 1) {
      //랜덤
      textItem.forEach(function (item, i) {
        var scaleNum = Math.random() * 3;
        // console.log(scaleNum)
        TweenMax.to(item, 1, {
          top: Math.random() * (windowHeight - 250) + 100,
          left: Math.random() * (windowWidth - 200) + 80,
          rotationX: 'random(-60,60)',
          rotationY: 'random(-60,60)',
          rotationZ: 'random(-90,90)',
          autoAlpha: scaleNum / 3,
          scale: scaleNum, //"random(.1,2.5)",
          //webkitFilter:"blur(" + scaleNum / 3 + "px)",
          ease: Power4.easeInOut,
          delay: 'random(0,.5)',
        });
      });
    } else if (pageNum == 2) {
      //여러분이 해보세요
      textItem.forEach(function (item, i) {
        TweenMax.to(item, 1, {
          top: windowHeight / 2 + Math.sin(i / 5) * 50,
          left: i * 18, //windowWidth / 2 ,
          rotationX: 0,
          rotationY: 0,
          rotationZ: 0,
          autoAlpha: 1,
          scale: 0.5,
          ease: Power4.easeInOut,
          delay: i * 0.02, //"random(0,.5)"
        });
      });
    }
  }
  window.addEventListener('resize', function () {
    resize();
  });
  function resize() {
    windowHeight = window.innerHeight;
    windowWidth = window.innerWidth;
    //console.log(windowWidth , windowHeight)
    motionSetting();
  }

  resize();
};
