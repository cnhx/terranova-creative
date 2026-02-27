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

// --- Active nav link for single-page anchors ---
const navLinks = document.querySelectorAll('.site-nav a');
const sections = Array.from(navLinks)
  .map((link) => document.querySelector(link.getAttribute('href')))
  .filter(Boolean);

const setActiveLink = () => {
  const scrollPoint = window.scrollY + 120;
  let activeId = sections[0] ? `#${sections[0].id}` : '';

  sections.forEach((section) => {
    if (scrollPoint >= section.offsetTop) {
      activeId = `#${section.id}`;
    }
  });

  navLinks.forEach((link) => {
    link.classList.toggle('active', link.getAttribute('href') === activeId);
  });
};

setActiveLink();
window.addEventListener('scroll', setActiveLink, { passive: true });
window.addEventListener('hashchange', setActiveLink);

// --- Mobile nav toggle ---
const navToggle = document.querySelector('.nav-toggle');
const siteHeader = document.querySelector('.site-header');

if (navToggle && siteHeader) {
  navToggle.addEventListener('click', () => {
    siteHeader.classList.toggle('nav-open');
    const expanded = siteHeader.classList.contains('nav-open');
    navToggle.setAttribute('aria-expanded', expanded);
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      siteHeader.classList.remove('nav-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  document.addEventListener('click', (e) => {
    if (!siteHeader.contains(e.target)) {
      siteHeader.classList.remove('nav-open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });
}

// --- Contact form: mailto submission ---
const form = document.querySelector('.contact-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const get = (id) => (form.querySelector(`#${id}`) || {}).value?.trim() || '';
    const name = get('name');
    const organization = get('organization');
    const message = get('message');

    if (!name) {
      alert('Please provide your name.');
      return;
    }

    const subject = `Institutional inquiry from ${name}`;
    const body = [
      `Name: ${name}`,
      organization ? `Organization: ${organization}` : '',
      '',
      'Message:',
      message || '(No message provided)'
    ].filter(Boolean).join('\n');

    window.location.href = `mailto:info@Terranovacreative.co?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}
