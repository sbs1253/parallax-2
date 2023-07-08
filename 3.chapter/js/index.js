/* eslint-disable no-loop-func */
/* eslint-disable no-plusplus */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */

window.onload = () => {
  let prevButton = document.querySelectorAll('button')[0];
  let nextButton = document.querySelectorAll('button')[1];
  let contentWrap = document.querySelector('.contentWrap');
  let diskInner = document.querySelectorAll('.disk_inner');
  let album = document.querySelectorAll('.album');
  let pointBtnAll = document.querySelectorAll('.pointWrap li');
  let pageNum = 0;
  let totalNum = album.length;
  let bgArray = [];
  bgArray[0] = ['#0272a4', '#f6a564'];
  bgArray[1] = ['#b6bfc8', '#36595b'];
  bgArray[2] = ['#e58e82', '#6f569f'];

  function pageChangeFunc() {
    console.log(`totalNum = ${totalNum} pageNum = ${pageNum}`);

    contentWrap.computedStyleMap.background = `linear-gradient(120deg, ${
      (bgArray[pageNum][0], bgArray[pageNum][1])
    })`;

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
    diskInner[pageNum].style.background = bgArray[pageNum];
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
