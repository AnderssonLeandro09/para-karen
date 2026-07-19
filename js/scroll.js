/* ============================================
   SCROLL.JS — Revelado de elementos al hacer scroll
   (IntersectionObserver, sin dependencias)
   ============================================ */

function initScrollReveal() {
  const targets = document.querySelectorAll('[data-reveal]');
  if (!targets.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const delay = parseFloat(el.dataset.delay || '0');
          window.setTimeout(() => {
            el.classList.add('is-visible');
          }, delay * 1000);
          observer.unobserve(el);
        }
      });
    },
    {
      threshold: 0.18,
      rootMargin: '0px 0px -8% 0px',
    }
  );

  targets.forEach((el) => observer.observe(el));
}

/**
 * Aplica automáticamente una clase reveal-* a cada hijo directo
 * de un contenedor, útil para listas (timeline, tarjetas, galería)
 * sin tener que anotar cada elemento manualmente en el HTML.
 */
function autoStagger(containerSelector, revealType = 'up', step = 0.08) {
  const container = document.querySelector(containerSelector);
  if (!container) return;

  Array.from(container.children).forEach((child, index) => {
    if (!child.hasAttribute('data-reveal')) {
      child.setAttribute('data-reveal', revealType);
      child.classList.add(`reveal-${revealType}`);
      child.setAttribute('data-delay', String(index * step));
    }
  });
}
