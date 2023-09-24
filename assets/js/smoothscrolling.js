// Function to handle smooth scrolling with an offset
function smoothScroll(target, offset) {
  // Check if the target is within the current page
  if (target) {
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
}

// Function to add "active" class to the clicked navigation link
function setActiveNavLink(target) {
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach((link) => {
    link.classList.remove('active');
  });

  const activeLink = document.querySelector(`[href="${target}"]`);
  if (activeLink) {
    activeLink.classList.add('active');
  }
}

// Function to check if the hash in the URL matches a known target and apply the offset
function checkHashAndScroll() {
  const hash = window.location.hash;
  let offset = 105; // Default offset

  if (hash === '#about' || hash === '#contact' || hash === '#hero' || hash === '#workout' || hash === '#signup') {
    offset = 105; // Set a different offset for specific links
    smoothScroll(hash, offset);
    setActiveNavLink(hash);
  }
}

// Add event listeners to anchor links with the "smooth-scroll" class
const smoothScrollLinks = document.querySelectorAll('.smooth-scroll');
smoothScrollLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent the default link behavior
    const target = link.getAttribute('href');
    const offset = target === '#hero' ? 0 : 105; // Adjust offset for the "hero" link
    smoothScroll(target, offset);
    setActiveNavLink(target);
  });
});

// Check and apply the offset when the hash in the URL changes
window.addEventListener('hashchange', checkHashAndScroll);

// Initial check for hash in the URL when the page loads
window.addEventListener('load', checkHashAndScroll);
