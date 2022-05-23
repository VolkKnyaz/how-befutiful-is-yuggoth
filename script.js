let fearClick = Document.querySelector('.clickScarry');
let back = Document.querySelector('.quote-block');

const fearFunction = () => {
  buttonScarry.addEventListener('mousedown',() => {
  back.style.backgroundImage = 'url(assets/img-scary).jpg';
  });
  buttonScarry.addEventListener('mouseup',() => {
  back.style.backgroundImage = 'url(assets/img-intro).jpg';
  });
};
fearFunction();
