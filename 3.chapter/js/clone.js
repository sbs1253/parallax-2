const pageWrap = document.querySelectorAll('.pageWrap');
const cdWrap = document.querySelectorAll('.cdWrap');
const btn = document.querySelectorAll('button');
const li = document.querySelectorAll('li');
const pageNum = pageWrap.length;
let page = 0;
const bc = [];
bc[0] = 'linear-gradient(150deg, #0071a3, #f99e57)';
bc[1] = 'linear-gradient(150deg, #b4bdc6, #768186)';
bc[2] = 'linear-gradient(150deg, #5d4b73, #f2f1d1)';
function pageChange() {
  for (let i = 0; i < pageNum; i++) {
    pageWrap[i].classList.add('hide');
    li[i].classList.remove('hide');
  }
  pageWrap[page].classList.remove('hide');
  pageWrap[page].style = `background : ${bc[page]};`;
  cdWrap[page].style = `background : ${bc[page]};`;
  li[page].classList.add('hide');
}

btn[0].addEventListener('click', () => {
  if (page > 0) {
    page -= 1;
  } else if (page === 0) {
    page = 2;
  }
  pageChange();
});

btn[1].addEventListener('click', () => {
  if (page < 2) {
    page += 1;
  } else if (page === 2) {
    page = 0;
  }
  pageChange();
});
pageChange();
