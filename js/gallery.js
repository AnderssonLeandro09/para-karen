/* ============================================
   GALLERY.JS — Tarjetas que se voltean (fotos)
   El video no necesita JS: reproduce solo, en bucle,
   gracias a los atributos autoplay/muted/loop del HTML.
   ============================================ */

function setupFlipCards() {
  const cards = document.querySelectorAll('[data-flip]');
  if (!cards.length) return;

  cards.forEach((card) => {
    const flipButtons = card.querySelectorAll('.flip-icon');

    flipButtons.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        card.classList.toggle('is-flipped');
      });
    });
  });
}

function initGallery() {
  setupFlipCards();
}
