// Funcionalidad del menú de navegación móvil
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const body = document.querySelector('body');

    if (burger) {
        burger.addEventListener('click', () => {
            // Toggle Nav
            nav.classList.toggle('active');

            // Prevenir scroll cuando el menú está abierto
            body.classList.toggle('no-scroll');

            // Animate Links
            navLinks.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = '';
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
                }
            });

            // Burger Animation
            burger.classList.toggle('toggle');
        });
    }

    // Cerrar el menú al hacer clic en un enlace
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (nav.classList.contains('active')) {
                nav.classList.remove('active');
                body.classList.remove('no-scroll');
                burger.classList.remove('toggle');

                navLinks.forEach(link => {
                    link.style.animation = '';
                });
            }
        });
    });

    // Accordion Functionality
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const accordionItem = header.parentElement;
            const accordionContent = header.nextElementSibling;

            // Toggle active class
            header.classList.toggle('active');

            // Toggle content
            if (header.classList.contains('active')) {
                accordionContent.classList.add('active');
            } else {
                accordionContent.classList.remove('active');
            }
        });
    });

    // Smooth Scrolling para anclas
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');

            // Solo aplicar a anclas que apuntan a elementos existentes
            if (targetId !== '#' && document.querySelector(targetId)) {
                e.preventDefault();

                document.querySelector(targetId).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Header Sticky al hacer scroll
    const header = document.querySelector('header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('sticky');
            } else {
                header.classList.remove('sticky');
            }
        });
    }

    // Formulario de contacto
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Aquí iría la lógica para enviar el formulario
            alert('Gracias por tu mensaje. Te contactaremos pronto.');
            contactForm.reset();
        });
    }

    // Formulario de newsletter (si hubiera en alguna página)
    const newsletterForms = document.querySelectorAll('.newsletter-form');
    if (newsletterForms.length > 0) {
        newsletterForms.forEach(form => {
            form.addEventListener('submit', function(e) {
                e.preventDefault();

                // Aquí iría la lógica para suscribir al newsletter
                alert('¡Gracias por suscribirte a nuestro newsletter!');
                form.reset();
            });
        });
    }

    // Animación de elementos al hacer scroll (si hubiera elementos con estas clases)
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.fade-in, .slide-in, .pop-in');

        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;

            if (elementPosition < screenPosition) {
                element.classList.add('appear');
            }
        });
    };

    if (document.querySelectorAll('.fade-in, .slide-in, .pop-in').length > 0) {
        window.addEventListener('scroll', animateOnScroll);
        animateOnScroll(); // Ejecutar una vez al cargar
    }
});