/* eslint-disable */

window.onload = () => {
  let prevButton = document.querySelectorAll('button')[0];
  let nextButton = document.querySelectorAll('button')[1];
  // let contentWrap = document.querySelector('.contentWrap');
  let gradientWrap = document.querySelector('.gradientWrap');
  let diskInner = document.querySelectorAll('.disk_inner');
  let album = document.querySelectorAll('.album');
  let pointBtnAll = document.querySelectorAll('.pointWrap li');
  let pageNum = 0;
  let totalNum = album.length;
  let bgArray = [];
  bgArray[0] = ['#0272a4', '#f6a564'];
  bgArray[1] = ['#b6bfc8', '#36595b'];
  bgArray[2] = ['#e58e82', '#6f569f'];
  let start_X = 0;
  let end_X = 0;
  function mibileCheck() {
    let mobileKeyWords = [
      'Android',
      'iPhone',
      'iPod',
      'BlackBerry',
      'Windows CE',
      'SAMSUNG',
      'LG',
      'MOT',
      'SonyEricsson',
    ];
    // eslint-disable-next-line no-restricted-syntax
    for (let info of mobileKeyWords) {
      if (navigator.userAgent.match(mobileKeyWords[info]) != null) {
        return true;
      }
    }
    return false;
  }

  function touchFunc(evt) {
    let type = null;
    let touch = null;

    switch (evt.type) {
      case 'touchstart':
        type = 'mousedown';
        touch = evt.changedTouches[0];
        start_X = touch.clientX;
        console.log('start_X: ' + start_X);
        end_X = 0;
        break;

      case 'touchend':
        type = 'mouseup';
        touch = evt.changedTouches[0];
        end_X = touch.clientX;
        console.log('end_X : ' + end_X);

        let chkNum = start_X - end_X;
        let chkNumAbs = Math.abs(chkNum);
        if (chkNumAbs > 100) {
          // //터치를 많이 했으면 실행
          if (chkNum < 0) {
            //왼쪽으로 터치
            if (pageNum > 0) {
              pageNum -= 1;
            } else {
              pageNum = totalNum - 1;
            }
          } else {
            if (pageNum < totalNum - 1) {
              pageNum += 1;
            } else {
              pageNum = 0;
            }

            //오른쪽으로 터치
          }
          pageChangeFunc();
        }
        break;
      default:
    }
  }
  if (mibileCheck()) {
    gradientWrap.addEventListener('touchstart', touchFunc, false);
    gradientWrap.addEventListener('touchend', touchFunc, false);
  }

  function pageChangeFunc() {
    gradientWrap.style.cssText = `background:linear-gradient(120deg, ${bgArray[pageNum][0]}, ${bgArray[pageNum][1]});
    opacity : 0.5`;
    setTimeout(() => {
      gradientWrap.style.opacity = 1;
    }, 300);
    // 배경색 바꾸는코드는 시간지연함수로 가능

    // contentWrap.style.background =
    //   'linear-gradient(120deg,' +
    //   bgArray[pageNum][0] +
    //   ', ' +
    //   bgArray[pageNum][1] +
    //   ')';
    for (let i = 0; i < totalNum; i++) {
      if (pageNum === i) {
        // 현재 페이지

        album[i].classList.add('active');
        pointBtnAll[i].classList.add('active');
      } else {
        // console.log(i);
        album[i].classList.remove('active');
        pointBtnAll[i].classList.remove('active');
      }
    }

    diskInner[pageNum].style.background = bgArray[pageNum][0];
  }
  // 최초실행
  pageNum = 1;
  pageChangeFunc();

  prevButton.addEventListener('click', () => {
    if (pageNum > 0) {
      pageNum -= 1;
    } else {
      pageNum = totalNum - 1;
    }
    pageChangeFunc();
  });

  nextButton.addEventListener('click', () => {
    if (pageNum < totalNum - 1) {
      pageNum += 1;
    } else {
      pageNum = 0;
    }
    pageChangeFunc();
  });

  // list 클릭시 페이지 바뀌는 함수
  for (let i = 0; i < pointBtnAll.length; i++) {
    // console.log(i);
    ((idx) => {
      pointBtnAll[idx].onclick = () => {
        console.log(i);

        pageNum = idx;
        pageChangeFunc();
      };
    })(i);
  }
};

// for (let i = 0; i < pointBtnAll.length; i++) {
//   (() => {})(i);
// }
