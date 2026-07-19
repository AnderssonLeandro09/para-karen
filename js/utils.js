/* ============================================
   UTILS.JS — Funciones auxiliares puras
   (script clásico: funciona con file:// y con servidor)
   ============================================ */

function pad(num, size = 2) {
  return String(num).padStart(size, '0');
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function debounce(fn, wait = 150) {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), wait);
  };
}

function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function isTouchDevice() {
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
}
