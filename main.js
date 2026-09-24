/* Chess House — main.js */

// ── NAV ACTIVE LINK ──
const setActiveNav = () => {
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') === page) a.classList.add('active');
  });
};

// ── MOBILE MENU ──
const initMobileMenu = () => {
  const hamburger = document.querySelector('.hamburger');
  const menu      = document.querySelector('.mobile-menu');
  if (!hamburger || !menu) return;

  hamburger.addEventListener('click', () => {
    menu.classList.toggle('open');
    document.body.style.overflow = menu.classList.contains('open') ? 'hidden' : '';
  });

  menu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      menu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
};

// ── NAV SCROLL SHADOW ──
const initNavScroll = () => {
  const nav = document.querySelector('.nav');
  if (!nav) return;
  window.addEventListener('scroll', () => {
    nav.style.borderBottomColor = window.scrollY > 10 ? 'rgba(255,255,255,0.06)' : 'var(--rule)';
  }, { passive: true });
};

// ── REVEAL ON SCROLL (single fade-in, not scattered) ──
const initReveal = () => {
  const items = document.querySelectorAll('.reveal');
  if (!items.length) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity = '1';
        e.target.style.transform = 'none';
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  items.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(16px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    io.observe(el);
  });
};

// ── CHESS BOARD GRID GENERATOR ──
const buildBoard = (el) => {
  if (!el) return;
  for (let i = 0; i < 64; i++) {
    const cell = document.createElement('span');
    const row = Math.floor(i / 8);
    const col = i % 8;
    if ((row + col) % 2 === 0) cell.style.background = 'rgba(255,255,255,0.04)';
    el.appendChild(cell);
  }
};

// ── CONTACT FORM (basic client-side only, Netlify handles submission) ──
const initForm = () => {
  const form = document.querySelector('.contact-form');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.textContent = 'Envoyé ✓';
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = 'Envoyer le message';
      btn.disabled = false;
      form.reset();
    }, 3000);
  });
};

// ── YEAR IN FOOTER ──
const setYear = () => {
  document.querySelectorAll('.year').forEach(el => {
    el.textContent = new Date().getFullYear();
  });
};

// ── INIT ──
document.addEventListener('DOMContentLoaded', () => {
  setActiveNav();
  initMobileMenu();
  initNavScroll();
  initReveal();
  setYear();
  initForm();
  document.querySelectorAll('.board-grid').forEach(buildBoard);
});
