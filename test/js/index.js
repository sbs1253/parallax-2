/* eslint-disable */
window.onload = () => {
  const child = document.querySelector('.child');
  for (let i = 0; i < 19; i++) {
    const content = document.createElement('div');
    content.innerHTML = 'hi';
    child.appendChild(content);
  }
};
