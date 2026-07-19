/* ============================================
   ANIMATIONS.JS — Efectos con GSAP + ScrollTrigger
   ============================================ */

function initAnimations() {
  if (typeof gsap === 'undefined') return;
  if (prefersReducedMotion()) return;

  gsap.registerPlugin(ScrollTrigger);

  // Parallax muy sutil en la imagen del hero
  gsap.to('.hero-image', {
    yPercent: 10,
    ease: 'none',
    scrollTrigger: {
      trigger: '#hero',
      start: 'top top',
      end: 'bottom top',
      scrub: true,
    },
  });

  // Entrada del hero al cargar
  gsap.timeline({ delay: 0.3 })
    .from('.hero-eyebrow', { opacity: 0, y: 16, duration: 0.9, ease: 'power2.out' })
    .from('.hero-title', { opacity: 0, y: 30, duration: 1.1, ease: 'power3.out' }, '-=0.6')
    .from('.hero-quote', { opacity: 0, y: 16, duration: 0.9, ease: 'power2.out' }, '-=0.5')
    .from('.hero-date', { opacity: 0, duration: 0.8 }, '-=0.5');

  // Párrafos de la historia, entrada escalonada e individual
  gsap.utils.toArray('.historia-text p').forEach((p, i) => {
    gsap.fromTo(
      p,
      { opacity: 0, y: 34, filter: 'blur(6px)' },
      {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: p,
          start: 'top 85%',
        },
        delay: i % 2 === 0 ? 0 : 0.1,
      }
    );
  });

  // Título de sección: leve escala + fade
  gsap.utils.toArray('.section-head').forEach((head) => {
    gsap.from(head, {
      opacity: 0,
      scale: 0.96,
      duration: 0.9,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: head,
        start: 'top 88%',
      },
    });
  });

  // Carta final: aparición ceremoniosa
  gsap.from('.letter-card', {
    opacity: 0,
    y: 50,
    scale: 0.97,
    duration: 1.2,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.letter-card',
      start: 'top 80%',
    },
  });
}
