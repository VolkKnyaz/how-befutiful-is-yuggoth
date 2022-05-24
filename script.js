let scarryText = document.querySelector('.clickScarry');
let quoteBack = document.querySelector('.quote-block');
//let cardData = document.querySelector('.card-holder:last-child');
//let cardData = document.getElementById('#new-character-card')
//let newCardButton = getElementById('#new-character-button');

// background change function
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

// new character card function
/*
on click: 3 fields
1: pic url or default text
2: name or default name
3: text or default text
button: submit

on a new card: left right corner edit & delete buttons
*/

/*function createForm () {
  appendChild('div');
};

function newCharacter () {
  newCardButton.addEventListener('click', () => {
    cardData.style.display = 'none';
    cardForm = cardData.appendChild('div');
    cardForm.style.border = 'solid 5px red';
  })
};
newCharacter ();
*/
scarryBackChange ();
