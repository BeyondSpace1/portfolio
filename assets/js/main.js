// // SPA-like navigation using scroll into view
// document.querySelectorAll('.nav-link').forEach(link => {
//   link.addEventListener('click', e => {
//     e.preventDefault();
//     const targetId = link.getAttribute('href').substring(1);
//     const target = document.getElementById(targetId);
//     if (target) {
//       target.scrollIntoView({ behavior: 'smooth' });
//     }
//   });
// });

// // Update active link on scroll
// const sections = document.querySelectorAll('main > section');
// const navLinks = document.querySelectorAll('.nav-link');

// window.addEventListener('scroll', () => {
//   let current = '';
//   sections.forEach(section => {
//     const sectionTop = section.offsetTop - 120;
//     if (window.scrollY >= sectionTop) {
//       current = section.getAttribute('id');
//     }
//   });

//   navLinks.forEach(link => {
//     link.classList.remove('font-bold');
//     if (link.getAttribute('href') === `#${current}`) {
//       link.classList.add('font-bold');
//     }
//   });
// });

// // Animate sections on scroll (using Anime.js)
// function animateOnScroll() {
//   const animatedEls = document.querySelectorAll('.animate-fadeInUp');
//   animatedEls.forEach(el => {
//     const rect = el.getBoundingClientRect();
//     if (rect.top < window.innerHeight - 100) {
//       el.classList.add('opacity-100');
//     }
//   });
// }

// window.addEventListener('scroll', animateOnScroll);
// window.addEventListener('load', animateOnScroll);

// // Light/Dark toggle icon
// // const toggleBtn = document.getElementById('toggleMode');
// // const icon = document.getElementById('themeIcon');

// // toggleBtn.addEventListener('click', () => {
// //   const html = document.documentElement;
// //   if (html.getAttribute('data-theme') === 'dark') {
// //     html.setAttribute('data-theme', 'light');
// //     icon.textContent = '🌞';
// //   } else {
// //     html.setAttribute('data-theme', 'dark');
// //     icon.textContent = '🌙';
// //   }
// // });

// // Theme toggle
// const toggleBtn = document.getElementById('toggleMode');
// const icon = document.getElementById('themeIcon');
// const html = document.documentElement;

// // Load saved theme on startup
// document.addEventListener('DOMContentLoaded', () => {
//   const savedTheme = localStorage.getItem('theme') || 'light';
//   html.setAttribute('data-theme', savedTheme);
//   icon.textContent = savedTheme === 'dark' ? '🌙' : '🌞';
// });

// // Toggle theme on click
// toggleBtn.addEventListener('click', () => {
//   const currentTheme = html.getAttribute('data-theme');
//   const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
//   html.setAttribute('data-theme', newTheme);
//   localStorage.setItem('theme', newTheme);
//   icon.textContent = newTheme === 'dark' ? '🌙' : '🌞';
// });


// SPA-like navigation with offset
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const target = document.getElementById(targetId);
    if (target) {
      const offset = 100;
      const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// Active link scrollspy
const sections = document.querySelectorAll('main > section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const top = section.offsetTop - 120;
    if (window.scrollY >= top) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('font-bold', 'text-primary');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('font-bold', 'text-primary');
    }
  });
});

// Animate sections using Anime.js timeline
function animateVisibleSections() {
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 150 && !section.classList.contains('animated')) {
      section.classList.add('animated');

      const timeline = anime.timeline({
        easing: 'easeOutExpo',
        duration: 750
      });

      timeline.add({
        targets: section.querySelectorAll('h2, h3, p, li, a, .project-card'),
        opacity: [0, 1],
        translateY: [30, 0],
        delay: anime.stagger(100)
      });
    }
  });
}

window.addEventListener('scroll', animateVisibleSections);
window.addEventListener('load', animateVisibleSections);

/* Dark Mode Toggle (Commented Out)
const toggleBtn = document.getElementById('toggleMode');
const icon = document.getElementById('themeIcon');
const html = document.documentElement;

document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme') || 'light';
  html.setAttribute('data-theme', savedTheme);
  icon.textContent = savedTheme === 'dark' ? '🌙' : '🌞';
});

toggleBtn.addEventListener('click', () => {
  const currentTheme = html.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  icon.textContent = newTheme === 'dark' ? '🌙' : '🌞';
});
*/
