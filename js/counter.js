/* ============================================
   COUNTER.JS — Contador en vivo desde el primer mensaje
   ============================================ */

// 13 de junio de 2026, 01:02 (hora local del navegador)
const START_DATE = new Date(2026, 5, 13, 1, 2, 0);

const els = {};
let lastValues = { d: null, h: null, m: null, s: null };

function tick() {
  const now = new Date();
  let diff = Math.max(0, now - START_DATE);

  const days = Math.floor(diff / 86400000);
  diff -= days * 86400000;
  const hours = Math.floor(diff / 3600000);
  diff -= hours * 3600000;
  const minutes = Math.floor(diff / 60000);
  diff -= minutes * 60000;
  const seconds = Math.floor(diff / 1000);

  updateDigit(els.days, days, 'd');
  updateDigit(els.hours, pad(hours), 'h');
  updateDigit(els.minutes, pad(minutes), 'm');
  updateDigit(els.seconds, pad(seconds), 's');
}

function updateDigit(el, value, key) {
  if (!el) return;
  const str = String(value);
  if (lastValues[key] !== str) {
    lastValues[key] = str;
    el.textContent = str;
    el.style.animation = 'none';
    // Forzar reflow para reiniciar la animación
    void el.offsetWidth;
    el.style.animation = '';
  }
}

function initCounter() {
  els.days = document.getElementById('countDays');
  els.hours = document.getElementById('countHours');
  els.minutes = document.getElementById('countMinutes');
  els.seconds = document.getElementById('countSeconds');

  if (!els.days) return;

  tick();
  setInterval(tick, 1000);
}
