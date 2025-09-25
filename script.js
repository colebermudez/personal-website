// Script.js

document.addEventListener('DOMContentLoaded', function () {
  // Smooth scrolling for anchor links
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 50,
          behavior: 'smooth'
        });
      }
    });
  });

  // Form validation
  const contactForm = document.getElementById('contact-form');

  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Simple form validation
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    let isValid = true;

    if (nameInput.value.trim() === '') {
      isValid = false;
      alert('Please enter your name.');
    }

    if (!isValidEmail(emailInput.value.trim())) {
      isValid = false;
      alert('Please enter a valid email address.');
    }

    if (messageInput.value.trim() === '') {
      isValid = false;
      alert('Please enter your message.');
    }

    if (isValid) {
      // Handle form submission (you can send the form data to a server or perform other actions here)
      alert('Form submitted successfully!');
      contactForm.reset();
    }
  });

  // Helper function to check if the email is valid
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
});

