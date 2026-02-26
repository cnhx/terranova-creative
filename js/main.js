/* ========================================
   TERRANOVA CREATIVE — main.js
   ======================================== */

// --- Intersection Observer: fade-in animations ---
const fadeEls = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
);

fadeEls.forEach((el) => observer.observe(el));

// --- Active nav link ---
const navLinks = document.querySelectorAll('.site-nav a');
const currentPath = window.location.pathname.split('/').pop() || 'index.html';

navLinks.forEach((link) => {
  const href = link.getAttribute('href');
  if (href === currentPath || (currentPath === '' && href === 'index.html')) {
    link.classList.add('active');
  }
});

// --- Mobile nav toggle ---
const navToggle = document.querySelector('.nav-toggle');
const siteHeader = document.querySelector('.site-header');

if (navToggle && siteHeader) {
  navToggle.addEventListener('click', () => {
    siteHeader.classList.toggle('nav-open');
    const expanded = siteHeader.classList.contains('nav-open');
    navToggle.setAttribute('aria-expanded', expanded);
  });

  // Close mobile nav when a link is clicked
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      siteHeader.classList.remove('nav-open');
    });
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!siteHeader.contains(e.target)) {
      siteHeader.classList.remove('nav-open');
    }
  });
}

// --- Contact form: mailto submission ---
const form = document.querySelector('.contact-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const get = (id) => (form.querySelector('#' + id) || {}).value || '';
    const name = get('name');
    const org = get('organization');
    const role = get('role');
    const email = get('email');
    const inquiry = get('inquiry');

    if (!name || !email) {
      alert('Please provide your name and email.');
      return;
    }

    const subject = `Inquiry from ${name}${org ? ' — ' + org : ''}`;
    const body = [
      `Name: ${name}`,
      org ? `Organization: ${org}` : '',
      role ? `Role: ${role}` : '',
      `Email: ${email}`,
      '',
      'Inquiry:',
      inquiry,
    ].filter(Boolean).join('\n');

    window.location.href =
      `mailto:svampire@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}
