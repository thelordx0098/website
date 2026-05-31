// NAV ACTIVE STATE & BURGER
const navLinks = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('.page-section');
const burger = document.querySelector('.nav-burger');
const navMenu = document.querySelector('.nav-links');

if (burger) {
  burger.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    burger.classList.toggle('active');
  });
}

// Close nav on link click (mobile)
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('open');
    burger?.classList.remove('active');
  });
});

// Active nav on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id);
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => observer.observe(s));

// REVEAL ON SCROLL
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// SMOOTH SCROLL
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});
