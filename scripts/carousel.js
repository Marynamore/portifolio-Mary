document.addEventListener('DOMContentLoaded', function() {
  const splide = new Splide('.splide', { // Use 'Splide' com 'S' maiúsculo
    type: 'loop',
    perPage: 2,
    pagination: false,
    breakpoints: {
      425: {
        perPage: 1,
      },
    },
    autoplay: true,
    interval: 2000,
    arrows: true, // Ativa as setas padrão do Splide
  });

  splide.mount();
});