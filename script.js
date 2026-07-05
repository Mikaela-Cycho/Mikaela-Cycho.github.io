/* ============================================= */
/* Mikaela's Portfolio — interactions            */
/* ============================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Elements ---------- */
  const intro     = document.getElementById('intro');
  const introText = intro.querySelector('.intro__text');
  const main      = document.getElementById('main');
  const tabs      = document.querySelectorAll('.nav__tab');
  const sections  = Array.from(document.querySelectorAll('.section'));

  /* ---------- Intro animation sequence ---------- */
  // Timeline (ms): slide-in -> hold -> fade-out up -> reveal main
  const SLIDE_IN_DELAY = 200;    // beat before text rises
  const HOLD           = 2200;   // how long text stays centered
  const INTRO_ANIM     = 900;    // must match --intro-duration in CSS

  setTimeout(() => introText.classList.add('is-visible'), SLIDE_IN_DELAY);

  setTimeout(() => {
    introText.classList.remove('is-visible');
    introText.classList.add('is-leaving');
  }, SLIDE_IN_DELAY + HOLD);

  setTimeout(() => {
    intro.classList.add('is-hidden');
    main.setAttribute('aria-hidden', 'false');
    main.classList.add('is-visible');
  }, SLIDE_IN_DELAY + HOLD + INTRO_ANIM);

  setTimeout(() => {
    intro.style.display = 'none';
  }, SLIDE_IN_DELAY + HOLD + INTRO_ANIM * 2);

  /* ---------- Section navigation (slide right -> left) ---------- */
  let current = sections.find((s) => s.classList.contains('is-active'));

  const showSection = (name) => {
    const next = sections.find((s) => s.dataset.section === name);
    if (!next || next === current) return;

    const prev = current;

    // Previous section slides out to the LEFT.
    prev.classList.remove('is-active');
    prev.classList.add('is-exiting');

    // Next section slides in from the RIGHT (its parked default position).
    next.classList.remove('is-exiting');
    next.classList.add('is-active');

    current = next;

    // Once the exiting section is off-screen, silently park it back on the
    // right so it's ready to enter again next time (no visible slide-back).
    const cleanup = (e) => {
      if (e.target !== prev || e.propertyName !== 'transform') return;
      prev.removeEventListener('transitionend', cleanup);
      prev.classList.add('no-anim');
      prev.classList.remove('is-exiting');
      void prev.offsetWidth;              // force reflow to apply instantly
      prev.classList.remove('no-anim');
    };
    prev.addEventListener('transitionend', cleanup);
  };

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabs.forEach((t) => t.classList.remove('is-active'));
      tab.classList.add('is-active');
      showSection(tab.dataset.target);
    });
  });
});
