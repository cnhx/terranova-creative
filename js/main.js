/* =====================================================
   TERRANOVA CREATIVE — main.js v2
   ===================================================== */

// ─── Intersection Observer: fade-in ──────────────────
const fadeEls = document.querySelectorAll('.fade-in');
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
);
fadeEls.forEach((el) => io.observe(el));

// ─── Active nav link ──────────────────────────────────
const navLinks = document.querySelectorAll('.site-nav a');
const page = window.location.pathname.split('/').pop() || 'index.html';
navLinks.forEach((a) => {
  const href = a.getAttribute('href');
  if (href === page || (page === '' && href === 'index.html')) a.classList.add('active');
});

// ─── Mobile nav toggle ────────────────────────────────
const toggle = document.querySelector('.nav-toggle');
const header = document.querySelector('.site-header');
if (toggle && header) {
  toggle.addEventListener('click', () => {
    header.classList.toggle('nav-open');
    toggle.setAttribute('aria-expanded', header.classList.contains('nav-open'));
  });
  navLinks.forEach((a) => a.addEventListener('click', () => header.classList.remove('nav-open')));
  document.addEventListener('click', (e) => {
    if (!header.contains(e.target)) header.classList.remove('nav-open');
  });
}

// ─── Accordion ───────────────────────────────────────
document.querySelectorAll('.accordion-trigger').forEach((btn) => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.accordion-item');
    const isOpen = item.classList.contains('open');

    // Close all in same list
    const list = item.closest('.accordion-list');
    list.querySelectorAll('.accordion-item.open').forEach((el) => {
      el.classList.remove('open');
      el.querySelector('.accordion-trigger').setAttribute('aria-expanded', 'false');
    });

    // Toggle clicked
    if (!isOpen) {
      item.classList.add('open');
      btn.setAttribute('aria-expanded', 'true');
    }
  });
});

// Open first accordion item by default
document.querySelectorAll('.accordion-list').forEach((list) => {
  const first = list.querySelector('.accordion-item');
  if (first) {
    first.classList.add('open');
    const btn = first.querySelector('.accordion-trigger');
    if (btn) btn.setAttribute('aria-expanded', 'true');
  }
});

// ─── Hero bg lazy load ───────────────────────────────
const heroBg = document.querySelector('.hero-bg');
if (heroBg && heroBg.dataset.src) {
  const img = new Image();
  img.src = heroBg.dataset.src;
  img.onload = () => {
    heroBg.style.backgroundImage = `url('${heroBg.dataset.src}')`;
    setTimeout(() => { heroBg.style.opacity = '0.28'; }, 50);
  };
}

// ─── Contact form: mailto ────────────────────────────
const form = document.querySelector('.contact-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const get = (id) => (form.querySelector('#' + id) || {}).value || '';
    const name = get('name'), org = get('organization'), role = get('role'),
          email = get('email'), inquiry = get('inquiry');
    if (!name || !email) { alert('Please provide your name and email.'); return; }
    const subject = `Inquiry from ${name}${org ? ' — ' + org : ''}`;
    const body = ['Name: ' + name, org && 'Organization: ' + org, role && 'Role: ' + role,
      'Email: ' + email, '', 'Inquiry:', inquiry].filter(Boolean).join('\n');
    window.location.href = `mailto:svampire@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}
