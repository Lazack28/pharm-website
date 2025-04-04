// Mobile navigation toggle
document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  
  if (hamburger && navLinks) {
      hamburger.addEventListener('click', function() {
          navLinks.classList.toggle('active');
          hamburger.classList.toggle('active');
      });
  }
  
  // Close mobile menu when clicking outside
  document.addEventListener('click', function(event) {
      if (!event.target.closest('nav')) {
          if (navLinks.classList.contains('active')) {
              navLinks.classList.remove('active');
              hamburger.classList.remove('active');
          }
      }
  });
  
  // Close mobile menu when clicking on a link
  const navItems = document.querySelectorAll('.nav-links a');
  navItems.forEach(item => {
      item.addEventListener('click', function() {
          if (navLinks.classList.contains('active')) {
              navLinks.classList.remove('active');
              hamburger.classList.remove('active');
          }
      });
  });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
          window.scrollTo({
              top: targetElement.offsetTop - 80,
              behavior: 'smooth'
          });
      }
  });
});