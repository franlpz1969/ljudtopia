/**
 * Main JavaScript for LJUDTOPIA website
 * Handles interactive elements like menu toggle, language selection, etc.
 */

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Toggle active class on menu toggle (for hamburger animation)
            menuToggle.classList.toggle('active');
            
            // Toggle active class on navigation (to show/hide menu)
            mainNav.classList.toggle('active');
            
            // Prevent body scroll when menu is open
            if (mainNav.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });
    }
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.main-nav') && 
            !event.target.closest('.menu-toggle') && 
            mainNav && mainNav.classList.contains('active')) {
            
            mainNav.classList.remove('active');
            if (menuToggle) {
                menuToggle.classList.remove('active');
            }
            document.body.style.overflow = '';
        }
    });
    
    // Close menu when clicking on a nav link (mobile)
    const navLinks = document.querySelectorAll('.main-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                if (mainNav) {
                    mainNav.classList.remove('active');
                }
                if (menuToggle) {
                    menuToggle.classList.remove('active');
                }
                document.body.style.overflow = '';
            }
        });
    });
    
    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            // Reset mobile menu on desktop
            if (mainNav) {
                mainNav.classList.remove('active');
            }
            if (menuToggle) {
                menuToggle.classList.remove('active');
            }
            document.body.style.overflow = '';
        }
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add active class to current page in navigation
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.main-nav a, .sidebar-nav a');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
            const parentLi = link.closest('li');
            if (parentLi) {
                parentLi.classList.add('active');
            }
        }
    });
    
    // Debug info for mobile
    console.log('LJUDTOPIA mobile menu initialized');
    console.log('Menu toggle element:', menuToggle);
    console.log('Main nav element:', mainNav);
});