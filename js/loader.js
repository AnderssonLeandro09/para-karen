/* ============================================
   LOADER.JS — Pantalla de carga inicial
   ============================================ */

function initLoader() {
  const loader = document.getElementById('loader');
  if (!loader) return;

  const finish = () => {
    loader.classList.add('is-done');
    document.body.classList.remove('is-loading');
    loader.addEventListener(
      'transitionend',
      () => loader.remove(),
      { once: true }
    );
    // Respaldo por si transitionend no dispara (fadeOutLoader usa animation)
    setTimeout(() => loader.remove(), 900);
  };

  if (document.readyState === 'complete') {
    setTimeout(finish, 400);
  } else {
    window.addEventListener('load', () => setTimeout(finish, 400));
  }
}
