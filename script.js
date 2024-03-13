// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form submission handling
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.newsletter form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const emailInput = form.querySelector('input[type="email"]');
        const email = emailInput.value.trim();
        if (email !== '') {
            // Simulate form submission (replace with actual backend integration)
            setTimeout(() => {
                alert(`Thank you for subscribing to our newsletter, ${email}!`);
                emailInput.value = ''; // Clear input field after submission
            }, 1000);
        } else {
            alert('Please enter a valid email address.');
        }
    });
});

// Animated scroll to top button
const scrollToTopButton = document.getElementById('scrollToTop');

window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
        scrollToTopButton.classList.add('show');
    } else {
        scrollToTopButton.classList.remove('show');
    }
});

scrollToTopButton.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Additional JavaScript functionalities can be added here

// Add a function to toggle a class on an element
function toggleClass(element, className) {
    if (element.classList.contains(className)) {
        element.classList.remove(className);
    } else {
        element.classList.add(className);
    }
}

// Example: Toggle a class on click
const toggleButton = document.getElementById('toggleButton');
const targetElement = document.getElementById('targetElement');

toggleButton.addEventListener('click', function() {
    toggleClass(targetElement, 'active');
});

// Add functionality to toggle navigation menu on mobile devices
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const mainNav = document.querySelector('nav ul');

mobileMenuToggle.addEventListener('click', function() {
    toggleClass(mainNav, 'active');
});

// Add functionality to close mobile menu when a menu item is clicked
document.querySelectorAll('nav ul li a').forEach(item => {
    item.addEventListener('click', function() {
        mainNav.classList.remove('active');
    });
});

// Add smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

