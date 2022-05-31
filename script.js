// card counter for creating new id
let cardCreated = 0; 
// cards have 2 sides: view side [0] and data input side [1]
// this function makes one visible and other hidden onclick
flipCard = card => {
  if (getComputedStyle(card.children[0]).display === 'contents'){
    card.children[0].style.display = 'none';
    card.children[1].style.display = 'contents';
  }
  else {
    card.children[0].style.display = 'contents';
    card.children[1].style.display = 'none';
  }
}
// card for creating new cards is called addCard
// adding flipCard fucntionality to addCard icons
const addCardIcons = () => {
  let plusIcon = document.querySelector('#card-add .card-image');
  let exitIcon = document.querySelector('#card-add .exit-icon');
  plusIcon.addEventListener('click', ev => {
    let cardBox = ev.currentTarget.parentNode.parentNode;
    flipCard(cardBox);
  });
  exitIcon.addEventListener('click', ev => {
    let cardBox = ev.currentTarget.parentNode.parentNode;
    flipCard(cardBox);
  });
}
// add or delete margin(class card-last) to last card in a row 
function fixCardMargin () {
  let cardList = document.querySelector('.card-list-box');
  let cardNumber = cardList.children.length;
  for (let i = 0; i<cardNumber;i++) {
    if ((i+1)%3===0) cardList.children[i].classList.add('card-last');
    else cardList.children[i].classList.remove('card-last');
  }
}
function clearCard (card) {
  card.querySelector('.add-url').value = '';
  card.querySelector('.add-name').value = '';
  card.querySelector('.add-text').value = '';
}
// add event listeners to new card icons and buttons
function listenersNewCardIcons () {
  let editIconArray = document.querySelectorAll('.edit-icon');
  let exitIconArray = document.querySelectorAll('.exit-icon');
  let delIconArray = document.querySelectorAll('.del-icon');
  let submitIconArray = document.querySelectorAll('.add-submit');
  let newCardIndex = editIconArray.length - 2;
  editIconArray[newCardIndex].addEventListener('click', function (ev){ 
    let card = this.parentNode.parentNode; // or ev.currentTarget
    card.children[0].style.display = 'none';
    card.children[1].style.display = 'contents';
  });
  exitIconArray[newCardIndex].addEventListener('click', function (ev){
    let card = this.parentNode.parentNode;
    card.children[0].style.display = 'contents';
    card.children[1].style.display = 'none';
  });
  delIconArray[newCardIndex].addEventListener('click', function (ev){
    let card = this.parentNode.parentNode;
    card.remove();
    fixCardMargin();
  });
  submitIconArray[newCardIndex].addEventListener('click', function (ev){
    let card = this.parentNode.parentNode;
    // hold this card inputs
    let urlThisCard = card.querySelector('.add-url').value;
    let nameThisCard = card.querySelector('.add-name').value;
    let textThisCard = card.querySelector('.add-text').value;
    // fulfull this card view side w inputs
    card.querySelector('.card-image').setAttribute('src', urlThisCard);
    card.querySelector('.card-name').textContent = nameThisCard;
    card.querySelector('.card-text').textContent = textThisCard;
    flipCard(card);
  });
}
const addNewCard = () => {
  let addCardSubmitButton = document.querySelector('#card-add .add-submit');
  addCardSubmitButton.addEventListener('click',() => {
    let addCardBox = document.getElementById('card-add');
    // hold input data
    let urlNew = addCardBox.querySelector('.add-url').value;
    let nameNew = addCardBox.querySelector('.add-name').value;
    let textNew = addCardBox.querySelector('.add-text').value;
    // clone addCard and place before addCard
    let cardHolder = document.querySelector('.card-list-box');
    let newCard = addCardBox.cloneNode(true);
    newCard.id = 'card-new-'+`${cardCreated}`;
    cardCreated += 1; // new card counter
    cardHolder.insertBefore(newCard, addCardBox);
    // fulfilling new card view side w data in the addCard
    newCard.querySelector('.card-image').setAttribute('src', urlNew);
    newCard.querySelector('.card-name').textContent = nameNew;
    newCard.querySelector('.card-text').textContent = textNew;
    flipCard(newCard);
    flipCard(addCardBox);
    clearCard(addCardBox);
    fixCardMargin();
    listenersNewCardIcons();
  });
};
// change back in quote (function for fun)
const clickBackChange = () => {
  let textButton = document.querySelector('.change-back-button');
  let quoteBox = document.querySelector('.quote-box');
  textButton.addEventListener('mousedown',() => {
    quoteBox.style.backgroundImage = 'url(assets/img-scarry.jpg)';
    quoteBox.style.backgroundSize = 'cover';
    quoteBox.style.backgroundPosition = '50% 25%';
  });
  textButton.addEventListener('mouseup',() => {
    quoteBox.style.backgroundImage = null;
    quoteBox.style.backgroundSize = null;
    quoteBox.style.backgroundPosition = null;
  });
};
addCardIcons();
addNewCard();
clickBackChange ();