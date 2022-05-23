let scarryText = document.querySelector('.clickScarry');
let quoteBack = document.querySelector('.quote-block');

const scarryBackChange = () => {
  scarryText.addEventListener('mousedown',() => {
    quoteBack.style.backgroundImage = 'url(assets/img-scarry.jpg)';
    quoteBack.style.backgroundSize = 'cover';
    quoteBack.style.backgroundPosition = '50% 25%';
  });
  scarryText.addEventListener('mouseup',() => {
    quoteBack.style.backgroundImage = null;
    quoteBack.style.backgroundSize = null;
    quoteBack.style.backgroundPosition = null;
  });
};

scarryBackChange();
