// Function to handle smooth scrolling with an offset
function smoothScroll(target, offset) {
  // Check if the target is within the current page
  const targetElement = document.querySelector(target);
  if (targetElement) {
    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth',
    });
  } else {
    // If the target is on another page or external link, navigate to that page
    window.location.href = target;
  }
}

// Function to check if the hash in the URL matches a known target and apply the offset
function checkHashAndScroll() {
  const hash = window.location.hash;
  let offset = 105; // Default offset

  if (hash === '#about') {
    offset = 105; // Set a different offset for the 'about' link
  } else if (hash === '#contact') {
    offset = 105; // Set a different offset for the 'contact' link
  }

  smoothScroll(hash, offset);
}

// Add event listeners to anchor links with the "smooth-scroll" class
const smoothScrollLinks = document.querySelectorAll('.smooth-scroll');
smoothScrollLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent the default link behavior
    const target = link.getAttribute('href');
    const offset = 105; // Default offset
    smoothScroll(target, offset);
  });
});

// Check and apply the offset when the hash in the URL changes
window.addEventListener('hashchange', checkHashAndScroll);

// Initial check for hash in the URL when the page loads
window.addEventListener('load', checkHashAndScroll);
