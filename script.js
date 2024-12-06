// JavaScript for interactivity

// Toggle navigation menu
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Smooth scroll to sections
const links = document.querySelectorAll('a[href^="#"]');
links.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Form submission handling
const contactForm = document.querySelector('#contactForm');
contactForm.addEventListener('submit', event => {
  event.preventDefault(); // Prevent actual form submission
  const name = document.querySelector('#name').value;
  alert(`Thank you, ${name}! Your message has been sent.`);
  contactForm.reset(); // Clear the form
});
