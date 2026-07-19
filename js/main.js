/* ============================================
   MAIN.JS — Punto de entrada, orquesta los módulos
   (script clásico: depende de que utils/loader/counter/
   scroll/animations/gallery/hearts se hayan cargado antes
   en index.html — todas sus funciones quedan en el
   ámbito global gracias a "defer")
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('is-loading');

  initLoader();
  initCounter();

  // Aplica reveal automático a listas sin anotación manual completa
  autoStagger('#timelineList', 'up', 0.1);
  autoStagger('#cardGrid', 'scale', 0.06);

  initScrollReveal();
  initAnimations();
  initGallery();
  initHearts();
});
