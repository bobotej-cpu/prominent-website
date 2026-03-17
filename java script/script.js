// Smooth scrolling for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});


// Professional expand/collapse with accessibility
document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('expandToggle');
  const content = document.getElementById('expandableContent');

  if (!toggleBtn || !content) return;

  toggleBtn.addEventListener('click', () => {
    const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';

    if (isExpanded) {
      // Collapse
      content.classList.remove('open');
      toggleBtn.setAttribute('aria-expanded', 'false');
      toggleBtn.innerHTML = 'Learn More <span class="icon"><i class="fas fa-chevron-down"></i></span>';
    } else {
      // Expand
      content.classList.add('open');
      toggleBtn.setAttribute('aria-expanded', 'true');
      toggleBtn.innerHTML = 'Show Less <span class="icon"><i class="fas fa-chevron-up"></i></span>';
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const bookingForm = document.getElementById('main-booking');
  const statusMessage = document.createElement('div');
  statusMessage.id = 'form-status';
  statusMessage.style.marginTop = '1.5rem';
  statusMessage.style.textAlign = 'center';
  statusMessage.style.fontSize = '1.1rem';
  statusMessage.style.color = '#2ecc71';  // green success color
  bookingForm.appendChild(statusMessage);

  bookingForm.addEventListener('submit', function(e) {
    // Optional: add simple validation if needed

    // Show loading
    statusMessage.textContent = 'Sending your booking...';

    // Formspree will handle the submit via AJAX if you want (optional advanced)
    // For basic, let it submit normally – Formspree redirects back or to _next

    // If you want AJAX (no page reload):
    e.preventDefault();
    const formData = new FormData(bookingForm);
    fetch(bookingForm.action, {
      method: 'POST',
      body: formData,
      headers: { "Accept": "application/json" }
    }).then(response => {
      if (response.ok) {
        statusMessage.textContent = 'Done! We\'ll reach you shortly via email or phone.';
        bookingForm.reset();  // Clear form
      } else {
        statusMessage.textContent = 'Oops, something went wrong. Try again.';
        statusMessage.style.color = '#e74c3c';  // red error
      }
    }).catch(error => {
      statusMessage.textContent = 'Error: ' + error.message;
      statusMessage.style.color = '#e74c3c';
    });
  });
});
  document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    const status = document.getElementById('form-status');

    if (!form || !status) return;

    form.addEventListener('submit', async function(e) {
      e.preventDefault(); // Stop normal page reload

      status.textContent = 'Sending...';
      status.style.color = '#555';

      try {
        const response = await fetch(form.action, {
          method: 'POST',
          body: new FormData(form),
          headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
          status.textContent = 'Done! We will reach you shortly.';
          status.style.color = '#27ae60'; // green
          form.reset(); // Clear form fields
        } else {
          throw new Error('Submission failed');
        }
      } catch (error) {
     status.textContent = 'Sorry, something went wrong. Please try again or call us directly.';
        status.style.color = '#e74c3c'; // red
        console.error('Form error:', error);
      }
    });
  });

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});


// ============================
// Booking Form (Formspree)
// ============================
document.addEventListener('DOMContentLoaded', () => {

  const bookingForm = document.getElementById('main-booking');
  if (!bookingForm) return;

  const status = document.createElement('div');
  status.id = 'form-status';
  status.style.marginTop = '1.5rem';
  status.style.textAlign = 'center';
  bookingForm.appendChild(status);

  bookingForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    status.textContent = "Sending your booking...";

    try {
      const response = await fetch(bookingForm.action, {
        method: 'POST',
        body: new FormData(bookingForm),
        headers: { "Accept": "application/json" }
      });

      if (response.ok) {
        status.textContent = "Done! We'll contact you shortly.";
        status.style.color = "#27ae60";
        bookingForm.reset();
      } else {
        throw new Error("Submission failed");
      }

    } catch (error) {
      status.textContent = "Something went wrong. Please try again.";
      status.style.color = "#e74c3c";
    }

  });

});


// ============================
// Contact Form
// ============================
document.addEventListener('DOMContentLoaded', () => {

  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');

  if (!form || !status) return;

  form.addEventListener('submit', async (e) => {

    e.preventDefault();

    status.textContent = "Sending...";
    status.style.color = "#555";

    try {

      const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { "Accept": "application/json" }
      });

      if (response.ok) {
        status.textContent = "Done! We will reach you shortly.";
        status.style.color = "#27ae60";
        form.reset();
      } 
      else {
        throw new Error("Submission failed");
      }

    } 
    catch (error) {

      status.textContent = "Sorry, something went wrong.";
      status.style.color = "#e74c3c";

    }

  });

});
document.getElementById('main-booking')?.addEventListener('submit', function(e) {
  const emailField = document.getElementById('user-email');
  if (emailField && !emailField.value.toLowerCase().endsWith('@gmail.com')) {
    e.preventDefault();
    alert('Please enter a valid Gmail address (must end with @gmail.com)');
    emailField.focus();
    return;
  }
});



// ============================
// Hamburger Menu
// ============================
document.addEventListener('DOMContentLoaded', () => {

  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');

  if (!hamburger || !navMenu) return;

  // Toggle menu
  hamburger.addEventListener('click', (e) => {

    e.stopPropagation();

    const expanded =
      hamburger.getAttribute('aria-expanded') === 'true';

    hamburger.setAttribute('aria-expanded', !expanded);

    navMenu.classList.toggle('active');

  });

  // Close menu when link clicked
  navMenu.querySelectorAll('a').forEach(link => {

    link.addEventListener('click', () => {

      hamburger.setAttribute('aria-expanded', 'false');
      navMenu.classList.remove('active');

    });

  });

  // Close when clicking outside
  document.addEventListener('click', (e) => {

    if (!navMenu.contains(e.target) &&
        !hamburger.contains(e.target)) {

      hamburger.setAttribute('aria-expanded', 'false');
      navMenu.classList.remove('active');

    }

  });

});


// ============================
// Hide Header On Scroll
// ============================
document.addEventListener('DOMContentLoaded', () => {

  const navbar = document.querySelector('.navbar');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {

    const current = window.pageYOffset;

    if (current > lastScroll && current > 100) {
      navbar.style.transform = "translateY(-100%)";
    } 
    else {
      navbar.style.transform = "translateY(0)";
    }

    lastScroll = current;

  });

});
``// Header shrink on scroll
window.addEventListener("scroll", () => {

const navbar = document.querySelector(".navbar");

if(window.scrollY > 80){
navbar.classList.add("scrolled");
}
else{
navbar.classList.remove("scrolled");
}

});
