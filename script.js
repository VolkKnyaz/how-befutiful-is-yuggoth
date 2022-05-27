let textButton = document.querySelector('.change-back-button');
let quoteBox = document.querySelector('.quote-box');

// background change function
// добавить плавную анимацию
// поменять картинку на более жуткую
const clickBackChange = () => {
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
clickBackChange ();

// on a new card: left right corner edit & delete buttons & exit
// добавить крестик в add-card-data
// добавить плавную анимацию
let addCardBox = document.getElementById('card-add');
let clickImage = document.getElementById('card-add-image');
let cardIcon = document.querySelector('.exit-icon');

const showDataAddCard = () => {
  clickImage.addEventListener('click',() => {
    addCardBox.children[0].style.display = 'none';
    addCardBox.children[1].style.display = 'contents';
  });
};
// понимать, в какой карте находится exit icon
const showViewAddCard = () => {
  cardIcon.addEventListener('click',() => {
    addCardBox.children[1].style.display = 'none';
    addCardBox.children[0].style.display = 'contents';
  });
};

// функция добавления карты
const addCard = () => {
  // получить данные (не нажатие) кнопки сабмит
  // сформировать новый элемент перед кард
  // Присвоить классы новым и старым элементам
  // передать данные кнопок
};
showDataAddCard ();
showViewAddCard ();