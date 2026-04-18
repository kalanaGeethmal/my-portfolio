// ── THEME ──
const html = document.documentElement;
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
let currentTheme = prefersDark ? 'dark' : 'light';

function applyTheme(t) {
  html.setAttribute('data-theme', t);
  themeIcon.className = t === 'dark' ? 'ph ph-moon' : 'ph ph-sun';
}
applyTheme(currentTheme);
themeToggle.addEventListener('click', () => {
  currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
  applyTheme(currentTheme);
});

// ── MOBILE NAV ──
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
});
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
  });
});

// ── ACTIVE NAV LINK ──
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
function updateActiveLink() {
  const scrollY = window.scrollY;
  sections.forEach(section => {
    const top = section.offsetTop - 100;
    const bottom = top + section.offsetHeight;
    const id = section.getAttribute('id');
    if (scrollY >= top && scrollY < bottom) {
      navLinks.forEach(l => l.classList.remove('active'));
      const active = document.querySelector(`.nav-links a[href="#${id}"]`);
      if (active) active.classList.add('active');
    }
  });
}
window.addEventListener('scroll', updateActiveLink);

// ── TYPING EFFECT ──
const typingEl = document.getElementById('typing-text');
const words = ['Data Scientist', 'AI Solutions Engineer', 'Solutions Engineer', 'ML Practitioner', 'Data/AI Professional'];
let wIdx = 0, cIdx = 0, deleting = false;
function type() {
  const word = words[wIdx];
  if (!deleting) {
    typingEl.textContent = word.slice(0, ++cIdx);
    if (cIdx === word.length) { deleting = true; setTimeout(type, 1800); return; }
  } else {
    typingEl.textContent = word.slice(0, --cIdx);
    if (cIdx === 0) { deleting = false; wIdx = (wIdx + 1) % words.length; }
  }
  setTimeout(type, deleting ? 65 : 95);
}
type();

// ── SCROLL REVEAL ──
const revealEls = document.querySelectorAll('.reveal, .timeline-item, .edu-card, .project-card');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const siblings = [...entry.target.parentElement.children];
      const idx = siblings.indexOf(entry.target);
      entry.target.style.transitionDelay = `${idx * 0.08}s`;
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
revealEls.forEach(el => observer.observe(el));

// ── SKILL BARS ──
const bars = document.querySelectorAll('.skill-bar-fill');
const barObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.width = entry.target.getAttribute('data-width') + '%';
      barObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });
bars.forEach(bar => barObserver.observe(bar));

// ── SCROLL TO TOP ──
const scrollTopBtn = document.getElementById('scroll-top');
window.addEventListener('scroll', () => {
  scrollTopBtn.classList.toggle('show', window.scrollY > 500);
});
scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ── CONTACT FORM ──
const formSubmit = document.getElementById('form-submit');
const formSuccess = document.getElementById('form-success');
formSubmit.addEventListener('click', async () => {
  const name    = document.getElementById('cf-name').value.trim();
  const email   = document.getElementById('cf-email').value.trim();
  const subject = document.getElementById('cf-subject').value.trim();
  const message = document.getElementById('cf-message').value.trim();
  if (!name || !email || !message) {
    formSubmit.style.outline = '2px solid #e53e3e';
    setTimeout(() => { formSubmit.style.outline = ''; }, 1200);
    return;
  }
  formSubmit.disabled = true;
  formSubmit.innerHTML = '<i class="ph ph-circle-notch" style="animation:spin 0.8s linear infinite;"></i> Sending...';
  try {
    const res = await fetch('https://formspree.io/f/xojpbwrp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({ name, email, subject, message })
    });
    if (res.ok) {
      formSubmit.style.display = 'none';
      formSuccess.style.display = 'block';
    } else {
      formSubmit.disabled = false;
      formSubmit.innerHTML = '<i class="ph ph-paper-plane-tilt"></i> Try Again';
    }
  } catch {
    formSubmit.disabled = false;
    formSubmit.innerHTML = '<i class="ph ph-paper-plane-tilt"></i> Try Again';
  }
});

document.head.insertAdjacentHTML('beforeend',
  '<style>@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }</style>'
);

// ── RENDER ARTICLES ──
function renderArticles() {
  const grid = document.getElementById('articles-grid');
  if (!grid) return;
  grid.innerHTML = articles.map(a => `
    <div class="article-card reveal">
      <img src="${a.img}" alt="${a.alt}" />
      <div class="article-card-body">
        <span class="article-tag">${a.tag}</span>
        <div class="article-title">${a.title}</div>
        <p class="article-desc">${a.desc}</p>
        <div class="article-meta">
          <span><i class="ph ph-calendar-blank"></i> ${a.date} &middot; ${a.readTime}</span>
          <a href="${a.link}" target="_blank" class="article-read-link">Read <i class="ph ph-arrow-right"></i></a>
        </div>
      </div>
    </div>
  `).join('');
  grid.querySelectorAll('.article-card').forEach(el => observer.observe(el));
}

// ── RENDER PROJECTS ──
function renderProjects() {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;
  grid.innerHTML = projects.map(p => {
    const badge = p.badge
      ? `<span class="award-badge"><i class="ph ${p.badge.icon}"></i> ${p.badge.text}</span>`
      : '';
    const tags = p.tags.map(t => `<span class="project-tag">${t}</span>`).join('');
    const links = p.links.map(l =>
      `<a href="${l.href}" ${l.href !== '#' ? 'target="_blank"' : ''} class="project-link"><i class="ph ${l.icon}"></i> ${l.text}</a>`
    ).join('');
    return `
      <div class="project-card reveal">
        <div class="project-img-wrap">
          <i class="ph ${p.icon} project-img-icon"></i>
          <div class="project-overlay"></div>
          ${badge}
        </div>
        <div class="project-body">
          <div class="project-title">${p.title}</div>
          <p class="project-desc">${p.desc}</p>
          <div class="project-tags">${tags}</div>
          <div class="project-links">${links}</div>
        </div>
      </div>
    `;
  }).join('');
  grid.querySelectorAll('.project-card').forEach(el => observer.observe(el));
}

// ── RENDER EXPERIENCE ──
function renderExperience() {
  const timeline = document.getElementById('experience-timeline');
  if (!timeline) return;
  timeline.innerHTML = experience.map(job => {
    const bullets = job.bullets.map(b => `<div class="tc-bullet">${b}</div>`).join('');
    return `
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-card">
          <div class="tc-header">
            <div>
              <div class="tc-company">${job.company}</div>
              <div class="tc-role">${job.role}</div>
            </div>
            <span class="tc-date">${job.date}</span>
          </div>
          <div class="tc-body">
            <div class="tc-bullets">${bullets}</div>
          </div>
        </div>
      </div>
    `;
  }).join('');
  timeline.querySelectorAll('.timeline-item').forEach(el => observer.observe(el));
}

renderArticles();
renderProjects();
renderExperience();
