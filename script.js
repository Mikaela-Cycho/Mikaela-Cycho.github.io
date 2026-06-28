/* ============================================= */
/* Mikaela's Portfolio — interactions            */
/* ============================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Elements ---------- */
  const intro     = document.getElementById('intro');
  const introText = intro.querySelector('.intro__text');
  const main      = document.getElementById('main');
  const panels    = document.querySelectorAll('.panel');

  /* ---------- Intro animation sequence ---------- */
  // Timeline (ms): slide-in -> hold -> fade-out up -> reveal main
  const SLIDE_IN_DELAY = 200;   // tiny beat before text rises
  const HOLD            = 2200;  // how long text stays centered
  const INTRO_ANIM      = 900;   // must match --intro-duration in CSS

  // 1. Slide the text up into the center.
  setTimeout(() => {
    introText.classList.add('is-visible');
  }, SLIDE_IN_DELAY);

  // 2. After the hold, fade the text out upward.
  setTimeout(() => {
    introText.classList.remove('is-visible');
    introText.classList.add('is-leaving');
  }, SLIDE_IN_DELAY + HOLD);

  // 3. Hide the intro layer and reveal the main page.
  setTimeout(() => {
    intro.classList.add('is-hidden');
    main.setAttribute('aria-hidden', 'false');
    main.classList.add('is-visible');
  }, SLIDE_IN_DELAY + HOLD + INTRO_ANIM);

  // 4. Remove the intro from the DOM flow once fully hidden.
  setTimeout(() => {
    intro.style.display = 'none';
  }, SLIDE_IN_DELAY + HOLD + INTRO_ANIM * 2);

  /* ---------- Panel expand / collapse ---------- */
  const openPanel = (panel) => {
    panel.classList.add('is-open');
    // Lock background interaction with the grid while expanded.
    document.body.style.overflow = 'hidden';
  };

  const closePanel = (panel) => {
    panel.classList.remove('is-open');
  };

  panels.forEach((panel) => {
    const face    = panel.querySelector('.panel__face');
    const backBtn = panel.querySelector('.back-btn');

    // Click anywhere on the collapsed face (panel or its button) to open.
    face.addEventListener('click', () => openPanel(panel));

    // Back button collapses the panel.
    backBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      closePanel(panel);
    });
  });

  // ESC key closes whichever panel is open.
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const open = document.querySelector('.panel.is-open');
      if (open) closePanel(open);
    }
  });
});
