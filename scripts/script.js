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
const linksContainer = document.querySelector(".links"); // Seleciona a div.links

hamburger.addEventListener("click", () => {
  linksContainer.classList.toggle("active"); // Aplica/remove a classe 'active' na div.links
  hamburger.classList.toggle("active");
});

navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    linksContainer.classList.remove("active"); // Remove a classe 'active' ao clicar em um link
    hamburger.classList.remove("active");
  });
});

document.addEventListener('click', (event) => {
  const isClickInside = linksContainer.contains(event.target) || hamburger.contains(event.target);
  if (!isClickInside && linksContainer.classList.contains('active')) { // Verifica se a div.links tem a classe 'active'
    linksContainer.classList.remove('active');
    hamburger.classList.remove('active');
  }
});

const downloadButton = document.getElementById('downloadButton');
downloadButton.addEventListener('click', () => {});