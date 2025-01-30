const carousel = document.querySelector('.carousel-container');
const cards = document.querySelectorAll('.card');
let cardIndex = 0;

function showCard(n) {
  cards[cardIndex].style.display = 'none';
  cardIndex = (n + cards.length) % cards.length;
  cards[cardIndex].style.display = 'block';
}

// Mostrar o próximo slide
function nextCard() {
  showCard(cardIndex + 1);
}

// Mostrar o slide anterior
function prevCard() {
  showCard(cardIndex - 1);
}

// Chamar a função para mostrar o primeiro slide
showCard(cardIndex);
