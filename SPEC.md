# Terranova Creative — Website Implementation Spec

## Project Overview
- **Brand:** Terranova Creative
- **Type:** Cultural Strategy & Institutional Advisory
- **Deploy:** GitHub Pages (static)
- **Pages:** Home, Practice, About, Contact (4 separate HTML files)

---

## File Structure
```
terranova-website/
├── index.html          (Home)
├── practice.html
├── about.html
├── contact.html
├── css/
│   └── style.css
├── js/
│   └── main.js
└── CNAME               (optional, for custom domain)
```

---

## Design Tokens (CSS Custom Properties)

```css
:root {
  --color-black: #000000;
  --color-bg: #F6F5F3;
  --color-text: #2A2A2A;
  --color-divider: #DDDDDD;
  --color-white: #FFFFFF;

  --font-serif: 'Cormorant Garamond', 'Playfair Display', Georgia, serif;
  --font-sans: 'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif;

  --max-width: 1200px;
  --section-padding: 120px 40px;
  --section-padding-mobile: 80px 24px;

  --transition-fade: opacity 0.6s ease, transform 0.6s ease;
}
```

---

## Google Fonts
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=Inter:wght@300;400;500&display=swap" rel="stylesheet">
```

---

## Logo (SVG — CSS/SVG Implementation)
No logo file provided. Implement as inline SVG:
```svg
<svg class="logo-mark" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <circle cx="16" cy="16" r="14" stroke="#000000" stroke-width="1.5"/>
  <line x1="2" y1="16" x2="30" y2="16" stroke="#000000" stroke-width="1.5"/>
</svg>
<span class="logo-text">TERRANOVA</span>
```
Both elements wrapped in `<a href="index.html" class="logo">`.

---

## Navigation (Sticky Header)

```html
<header class="site-header">
  <div class="container header-inner">
    <a href="index.html" class="logo">
      <!-- SVG logo mark -->
      <span class="logo-text">TERRANOVA</span>
    </a>
    <nav class="site-nav">
      <a href="index.html">Home</a>
      <a href="practice.html">Practice</a>
      <a href="about.html">About</a>
      <a href="contact.html">Contact</a>
    </nav>
    <button class="nav-toggle" aria-label="Menu">
      <span></span><span></span>
    </button>
  </div>
</header>
```

CSS: `position: sticky; top: 0; z-index: 100; background: var(--color-bg); border-bottom: 1px solid var(--color-divider);`
Active link: `border-bottom: 1px solid currentColor;`
Hover: underline transition

---

## Animations

All fade-in elements start as:
```css
.fade-in {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}
.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}
```

Intersection Observer in `main.js` triggers `.visible` class when element enters viewport.
Stagger delay via `transition-delay` on nth-child elements.

---

## HOME PAGE (index.html)

### Hero Section
```html
<section class="hero">
  <div class="container">
    <h1 class="hero-headline fade-in">Institutional Strategy for Cultural Organizations.</h1>
    <p class="hero-sub fade-in">Terranova Creative advises arts institutions and creative organizations on governance, positioning, and cross-cultural strategy, designing structured frameworks that support sustainable cultural initiatives.</p>
    <div class="hero-cta fade-in">
      <a href="practice.html" class="btn btn-primary">Practice</a>
      <a href="contact.html" class="btn btn-secondary">Contact</a>
    </div>
  </div>
</section>
<hr class="divider">
```

Hero headline font-size: clamp(2.5rem, 5vw, 5rem), font-family: var(--font-serif), font-weight: 400.

### Position Section
```html
<section class="section-position">
  <div class="container grid-2col">
    <h2 class="section-label fade-in">Position</h2>
    <p class="section-body fade-in">Terranova Creative operates at the intersection of institutional structure and cultural intelligence. We design strategic systems that clarify governance, refine positioning, and strengthen long-term institutional sustainability across evolving cultural environments.</p>
  </div>
</section>
<hr class="divider">
```

### Areas of Practice
```html
<section class="section-practice">
  <div class="container">
    <h2 class="section-label fade-in">Areas of Practice</h2>
    <div class="practice-grid fade-in">
      <div class="practice-item">
        <h3>Institutional Strategy</h3>
        <p>Designing governance alignment, program development frameworks, and operational clarity.</p>
      </div>
      <div class="practice-item">
        <h3>International & Cross-Cultural Strategy</h3>
        <p>Structuring institutional positioning across markets and regulatory systems.</p>
      </div>
      <div class="practice-item">
        <h3>Audience & Experience Design</h3>
        <p>Applying research methodologies to align engagement with institutional objectives.</p>
      </div>
      <div class="practice-item">
        <h3>Collaboration Architecture</h3>
        <p>Building structured models for artist and partner integration within sustainable institutional systems.</p>
      </div>
    </div>
  </div>
</section>
<hr class="divider">
```

Practice grid: CSS Grid, 2-column on desktop, 1-column on mobile. Each item: border-top: 1px solid var(--color-divider), padding-top: 32px.

### Closing Statement
```html
<section class="section-closing">
  <div class="container text-center">
    <p class="closing-text fade-in">Structure strengthens culture.</p>
    <a href="contact.html" class="btn btn-primary fade-in">Contact</a>
  </div>
</section>
```
Closing text: font-family: var(--font-serif), font-size: clamp(2rem, 4vw, 3.5rem), font-weight: 300.

---

## PRACTICE PAGE (practice.html)

```html
<section class="page-hero">
  <div class="container">
    <h1 class="fade-in">Practice</h1>
    <p class="page-intro fade-in">Our advisory work centers on structural clarity and long-term institutional alignment. We focus on systems before visibility, ensuring sustainable foundations for cultural initiatives.</p>
  </div>
</section>
<hr class="divider">

<!-- Each of 5 sections: -->
<section class="practice-section">
  <div class="container grid-2col">
    <h2 class="fade-in">Institutional Strategy</h2>
    <p class="fade-in">We support organizations in refining governance structures, aligning programs with institutional mission, and strengthening operational frameworks for long-term resilience.</p>
  </div>
</section>
<hr class="divider">
<!-- repeat for all 5 sections -->
```

5 sections:
1. Institutional Strategy
2. International & Cross-Cultural Strategy  
3. Audience & Experience Design
4. Collaboration & Partnership Design
5. Strategic Communications Architecture

Each in a `grid-2col` layout (label left, body right).

---

## ABOUT PAGE (about.html)

```html
<section class="page-hero">
  <div class="container">
    <h1 class="fade-in">Terranova Creative</h1>
    <p class="page-intro fade-in">Terranova Creative is a cultural strategy and institutional advisory firm grounded in principles of cultural economics, governance systems, and audience development.</p>
  </div>
</section>
<hr class="divider">

<section class="about-section">
  <div class="container grid-2col">
    <h2 class="fade-in">Approach</h2>
    <p class="fade-in">We integrate research-based methodologies with structural analysis to design frameworks that strengthen institutional resilience and strategic clarity.</p>
  </div>
</section>
<hr class="divider">

<section class="about-section">
  <div class="container grid-2col">
    <h2 class="fade-in">Background</h2>
    <p class="fade-in">Informed by advanced training in Art Business and Arts Administration, the firm applies interdisciplinary knowledge of cultural systems, program budgeting, and governance design to advisory engagements across the cultural sector.</p>
  </div>
</section>
<hr class="divider">

<section class="about-section">
  <div class="container">
    <h2 class="fade-in">Philosophy</h2>
    <div class="philosophy-list fade-in">
      <p>Culture is institutional infrastructure.</p>
      <p>Strategy precedes visibility.</p>
      <p>Sustainable programming requires structural clarity.</p>
    </div>
  </div>
</section>
```

Philosophy: large serif text, each line separated by `margin-bottom: 1.5rem`, font-size: clamp(1.5rem, 2.5vw, 2.5rem).

---

## CONTACT PAGE (contact.html)

```html
<section class="page-hero">
  <div class="container">
    <h1 class="fade-in">Contact</h1>
    <p class="page-intro fade-in">Terranova Creative works with institutions seeking structural clarity and strategic refinement.</p>
    <p class="fade-in">Based in California. Working with institutions internationally.</p>
  </div>
</section>
<hr class="divider">

<section class="contact-section">
  <div class="container contact-layout">
    <form class="contact-form fade-in" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" id="name" name="name" required>
      </div>
      <div class="form-group">
        <label for="org">Organization</label>
        <input type="text" id="org" name="organization">
      </div>
      <div class="form-group">
        <label for="role">Role</label>
        <input type="text" id="role" name="role">
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" name="email" required>
      </div>
      <div class="form-group">
        <label for="inquiry">Inquiry</label>
        <textarea id="inquiry" name="inquiry" rows="6"></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    <div class="contact-email fade-in">
      <!-- Placeholder: client to provide email -->
      <p>hello@terranovacreative.com</p>
    </div>
  </div>
</section>
```

Form styling: No borders except bottom line (border-bottom: 1px solid var(--color-divider)), no box shadows, no rounded corners. Labels: font-family sans, font-size 0.75rem, letter-spacing 0.1em, text-transform uppercase. Inputs: font-size 1rem, padding: 12px 0.

---

## FOOTER

```html
<footer class="site-footer">
  <div class="container footer-inner">
    <span class="footer-brand">TERRANOVA CREATIVE</span>
    <span class="footer-location">Based in California</span>
    <span class="footer-copy">© 2026 Terranova Creative</span>
  </div>
</footer>
```

Footer: border-top: 1px solid var(--color-divider), padding: 40px, font-family sans, font-size: 0.8rem, letter-spacing: 0.1em. Footer-inner: flex, space-between on desktop, column on mobile.

---

## CSS Button Styles

```css
.btn {
  display: inline-block;
  padding: 14px 36px;
  font-family: var(--font-sans);
  font-size: 0.75rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  text-decoration: none;
  border: 1px solid currentColor;
  transition: background 0.3s ease, color 0.3s ease;
}
.btn-primary {
  background: var(--color-black);
  color: var(--color-bg);
  border-color: var(--color-black);
}
.btn-primary:hover {
  background: transparent;
  color: var(--color-black);
}
.btn-secondary {
  background: transparent;
  color: var(--color-black);
}
.btn-secondary:hover {
  background: var(--color-black);
  color: var(--color-bg);
}
```

---

## Responsive Breakpoints

- Desktop: > 1024px — 2-column grid layout for sections
- Tablet: 768px–1024px — single column, larger padding
- Mobile: < 768px — single column, reduced font sizes, hamburger menu

---

## JavaScript (main.js)

1. **Intersection Observer** for `.fade-in` elements → add `.visible` class
2. **Active nav link** → compare `window.location.pathname` to nav href, add `active` class
3. **Mobile nav toggle** → toggle `.nav-open` class on `<header>`
4. **Smooth scroll** — CSS `scroll-behavior: smooth` on `html`

---

## GitHub Pages Deployment

1. Push to GitHub repo (e.g., `username/terranova-creative`)
2. Go to Settings → Pages → Source: Deploy from branch `main` → `/root`
3. Site available at `https://username.github.io/terranova-creative/`
4. For custom domain: add CNAME file with domain, configure DNS CNAME record

---

## Pending Client Inputs (placeholders in code)

- `YOUR_FORM_ID` in Formspree action URL → client signs up at formspree.io
- `hello@terranovacreative.com` → replace with actual email
- Logo SVG → replace with actual logo file if provided
- GitHub username → for Pages URL
