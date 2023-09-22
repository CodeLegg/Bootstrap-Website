    // Function to handle smooth scrolling with an offset
    function smoothScroll(target, offset) {
      const targetElement = document.querySelector(target);
      if (targetElement) {
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: targetPosition - offset,
          behavior: 'smooth',
        });
      }
    }

    // Add event listeners to navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent the default link behavior
        const target = link.getAttribute('data-target');
        smoothScroll(target, 80); // Adjust the offset value as needed
      });
    });