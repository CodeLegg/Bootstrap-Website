
        document.addEventListener("DOMContentLoaded", function () {
            const contactForm = document.getElementById("contactForm");

            contactForm.addEventListener("submit", function (e) {
                e.preventDefault();
                const name = document.getElementById("name").value;
                const email = document.getElementById("email").value;

                // You can customize the "thank you" message here
                alert(`Thank you, ${name}! Your message has been submitted.\nEmail: ${email}`);
                contactForm.reset();
            });
        });
