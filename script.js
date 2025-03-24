// Function to show the contact form
function showForm() {
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.style.display = 'block';
  } else {
    console.error('Contact form element not found!');
  }
}

// Function to hide the contact form
function hideForm() {
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.style.display = 'none';
  } else {
    console.error('Contact form element not found!');
  }
}
