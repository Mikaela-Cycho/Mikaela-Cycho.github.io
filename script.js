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

  /* ---------- Animated click cursor (APNG overlay) ---------- */
  // The native eye cursor is used normally; this animated overlay only
  // appears while hovering clickable elements, tip aligned to the pointer.
  const animCursor = document.getElementById('anim-cursor');
  if (animCursor && window.matchMedia('(pointer: fine)').matches) {
    // Only on devices with a precise pointer (mouse/trackpad), not touch.
    document.documentElement.classList.add('js-cursor');

    const CLICKABLE = '.nav__tab, .circle, .contact-btn, .contact-email';
    // Hotspot as a fraction of the image (apex ≈ 4,1 in the 63×64 source),
    // so it stays correct even if you resize --anim-cursor-size.
    const HOT_FX = 4 / 63;
    const HOT_FY = 1 / 64;
    let hovering = false;

    const place = (e) => {
      const x = e.clientX - animCursor.offsetWidth * HOT_FX;
      const y = e.clientY - animCursor.offsetHeight * HOT_FY;
      animCursor.style.transform = `translate(${x}px, ${y}px)`;
    };

    document.addEventListener('pointermove', (e) => {
      const overClickable = !!(e.target.closest && e.target.closest(CLICKABLE));
      if (overClickable) {
        if (!hovering) {
          hovering = true;
          animCursor.classList.add('is-visible');
        }
        place(e);
      } else if (hovering) {
        hovering = false;
        animCursor.classList.remove('is-visible');
      }
    });

    // Hide the overlay when the mouse leaves the window entirely.
    document.addEventListener('mouseleave', () => {
      hovering = false;
      animCursor.classList.remove('is-visible');
    });
  }

  /* ---------- Contact: reveal emails + copy to clipboard ---------- */
  const emailBtn = document.querySelector('.contact-btn--email');
  if (emailBtn) {
    // Toggle the popover (but not when clicking an address inside it).
    emailBtn.addEventListener('click', (e) => {
      if (e.target.closest('.contact-email')) return;
      emailBtn.classList.toggle('is-open');
    });

    // Copy an address to the clipboard, with brief visual feedback.
    emailBtn.querySelectorAll('.contact-email').forEach((btn) => {
      btn.addEventListener('click', async (e) => {
        e.stopPropagation();
        const email = btn.dataset.email;
        try {
          await navigator.clipboard.writeText(email);
        } catch (_) {
          // Fallback for non-secure contexts (e.g. opening via file://).
          const ta = document.createElement('textarea');
          ta.value = email;
          ta.style.position = 'fixed';
          ta.style.opacity = '0';
          document.body.appendChild(ta);
          ta.select();
          try { document.execCommand('copy'); } catch (_) {}
          ta.remove();
        }
        const original = btn.textContent;
        btn.classList.add('copied');
        btn.textContent = '已复制 ✓';
        setTimeout(() => {
          btn.textContent = original;
          btn.classList.remove('copied');
        }, 1200);
      });
    });

    // Close the popover when clicking anywhere outside the Email button.
    document.addEventListener('click', (e) => {
      if (!emailBtn.contains(e.target)) emailBtn.classList.remove('is-open');
    });
  }
});
