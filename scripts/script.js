particlesJS("particles-js", {
    particles: {
      number: { value: 100, density: { enable: true, value_area: 800 } },
      color: { value: "#ffffff" },
      shape: { type: "star", stroke: { width: 0, color: "#000000" } },
      opacity: { value: 0.5, random: true },
      size: { value: 3, random: true },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#6a3093",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: { enable: false }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "grab" },
        onclick: { enable: true, mode: "push" },
        resize: true
      },
      modes: {
        grab: { distance: 140, line_linked: { opacity: 1 } },
        bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
        repulse: { distance: 200 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 }
      }
    },
    retina_detect: true
});

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active"); /* Alterna a classe 'active' */
    hamburger.classList.toggle("active");
});

// Opcional: Fechar o menu ao clicar em um link
navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        hamburger.classList.remove("active");
    });
});

// Código para fechar o menu clicando fora dele (opcional)
document.addEventListener('click', (event) => {
  const isClickInside = navLinks.contains(event.target) || hamburger.contains(event.target);
  if (!isClickInside && navLinks.classList.contains('active')) {
    navLinks.classList.remove('active');
    hamburger.classList.remove('active');
  }
});

const downloadButton = document.getElementById('downloadButton');

downloadButton.addEventListener('click', () => {
  // Aqui você pode adicionar qualquer lógica adicional que desejar, como rastreamento de downloads, etc.
});

const carouselContainer = document.getElementById('carouselContainer');
const cardWidth = document.querySelector('.card').offsetWidth;
let currentPosition = 0;

function nextSlide() {
    currentPosition += cardWidth;
    if (currentPosition > carouselContainer.scrollWidth - carouselContainer.offsetWidth) {
        currentPosition = carouselContainer.scrollWidth - carouselContainer.offsetWidth;
    }
    carouselContainer.style.transform = `translateX(-${currentPosition}px)`;
}

function prevSlide() {
    currentPosition -= cardWidth;
    if (currentPosition < 0) {
        currentPosition = 0;
    }
    carouselContainer.style.transform = `translateX(-${currentPosition}px)`;
}

document.getElementById('contato').addEventListener('submit', function(event) {
  event.preventDefault();

  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const msg = document.getElementById('msg').value;

  // Montando o link mailto
  const mailtoLink = `mailto:marinaoliverbri674@gmail.com?subject=Contato de ${encodeURIComponent(nome)}&body=${encodeURIComponent(msg)}%0A%0ADe: ${encodeURIComponent(email)}`;

  // Abrindo o cliente de email
  window.location.href = mailtoLink;
});

