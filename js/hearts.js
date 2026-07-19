/* ============================================
   HEARTS.JS — Partículas discretas: corazones y luces
   ============================================ */

const HEART_CHAR = '♥';
const MAX_HEARTS = 10;

function spawnHeart(layer) {
  const heart = document.createElement('span');
  heart.className = 'floating-heart';
  heart.textContent = HEART_CHAR;

  const left = randomBetween(2, 96);
  const size = randomBetween(9, 18);
  const duration = randomBetween(11, 19);
  const delay = randomBetween(0, 6);
  const opacity = randomBetween(0.15, 0.4);
  const drift = randomBetween(-40, 40);

  heart.style.left = `${left}%`;
  heart.style.setProperty('--heart-size', `${size}px`);
  heart.style.setProperty('--dur', `${duration}s`);
  heart.style.setProperty('--delay', `${delay}s`);
  heart.style.setProperty('--heart-opacity', opacity.toFixed(2));
  heart.style.setProperty('--drift', `${drift}px`);

  layer.appendChild(heart);
}

function spawnGlowOrbs(layer) {
  const positions = [
    { top: '8%', left: '12%', size: 260, color: 'rgba(196,135,147,0.35)' },
    { top: '55%', left: '80%', size: 320, color: 'rgba(217,174,114,0.3)' },
    { top: '80%', left: '20%', size: 220, color: 'rgba(231,201,201,0.4)' },
  ];

  positions.forEach((pos, i) => {
    const orb = document.createElement('div');
    orb.className = 'glow-orb';
    orb.style.top = pos.top;
    orb.style.left = pos.left;
    orb.style.width = `${pos.size}px`;
    orb.style.height = `${pos.size}px`;
    orb.style.background = pos.color;
    orb.style.animationDelay = `${i * 2.4}s`;
    layer.appendChild(orb);
  });
}

function initHearts() {
  if (prefersReducedMotion()) return;

  const layer = document.getElementById('particlesLayer');
  if (!layer) return;

  spawnGlowOrbs(layer);

  const heartCount = isTouchDevice() ? 6 : MAX_HEARTS;
  for (let i = 0; i < heartCount; i++) {
    spawnHeart(layer);
  }
}
