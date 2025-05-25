/**
 * Main JavaScript para LJUDTOPIA website
 * VERSIÓN CORREGIDA - Menú móvil funcionando correctamente
 */

document.addEventListener('DOMContentLoaded', function() {
    console.log('LJUDTOPIA JavaScript inicializado');
    
    // === MENÚ MÓVIL === 
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    console.log('Menu toggle encontrado:', menuToggle);
    console.log('Main nav encontrado:', mainNav);
    
    if (menuToggle && mainNav) {
        // Click en el botón hamburguesa
        menuToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            console.log('Menu toggle clickeado');
            
            // Toggle active class en el botón (para animación hamburguesa)
            menuToggle.classList.toggle('active');
            
            // Toggle active class en navegación (para mostrar/ocultar menú)
            mainNav.classList.toggle('active');
            
            // Prevenir scroll del body cuando el menú está abierto
            if (mainNav.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
                console.log('Menú abierto');
            } else {
                document.body.style.overflow = '';
                console.log('Menú cerrado');
            }
        });
        
        console.log('Event listener del menú hamburguesa añadido');
    } else {
        console.error('No se encontraron elementos del menú móvil');
    }
    
    // === CERRAR MENÚ AL HACER CLICK FUERA ===
    document.addEventListener('click', function(event) {
        // Si el click no es en el menú ni en el botón hamburguesa
        if (!event.target.closest('.main-nav') && 
            !event.target.closest('.menu-toggle') && 
            mainNav && mainNav.classList.contains('active')) {
            
            console.log('Click fuera del menú - cerrando');
            
            mainNav.classList.remove('active');
            if (menuToggle) {
                menuToggle.classList.remove('active');
            }
            document.body.style.overflow = '';
        }
    });
    
    // === CERRAR MENÚ AL HACER CLICK EN ENLACES (MÓVIL) ===
    const navLinks = document.querySelectorAll('.main-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Solo en móvil (768px o menos)
            if (window.innerWidth <= 768) {
                console.log('Link del menú clickeado en móvil - cerrando menú');
                
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
    
    // === MANEJAR REDIMENSIÓN DE VENTANA ===
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            // Reset del menú móvil en desktop
            console.log('Redimensionado a desktop - reseteando menú móvil');
            
            if (mainNav) {
                mainNav.classList.remove('active');
            }
            if (menuToggle) {
                menuToggle.classList.remove('active');
            }
            document.body.style.overflow = '';
        }
    });
    
    // === SCROLL SUAVE PARA ENLACES ANCHOR ===
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
    
    // === MARCAR PÁGINA ACTIVA EN NAVEGACIÓN ===
    const currentPage = window.location.pathname.split('/').pop();
    const allNavLinks = document.querySelectorAll('.main-nav a, .sidebar-nav a');
    
    allNavLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
            const parentLi = link.closest('li');
            if (parentLi) {
                parentLi.classList.add('active');
            }
        }
    });
    
    // === FUNCIÓN DE DEBUG PARA VERIFICAR QUE TODO FUNCIONA ===
    function debugMenuStatus() {
        console.log('=== DEBUG MENU STATUS ===');
        console.log('Menu toggle element:', menuToggle);
        console.log('Main nav element:', mainNav);
        console.log('Menu toggle active:', menuToggle ? menuToggle.classList.contains('active') : 'N/A');
        console.log('Main nav active:', mainNav ? mainNav.classList.contains('active') : 'N/A');
        console.log('Window width:', window.innerWidth);
        console.log('========================');
    }
    
    // Mostrar debug al cargar
    debugMenuStatus();
    
    // Test de función - descomentar para probar
    // setTimeout(() => {
    //     console.log('Test: Abriendo menú automáticamente en 3 segundos');
    //     if (menuToggle && mainNav) {
    //         menuToggle.click();
    //     }
    // }, 3000);
    
    console.log('Inicialización completa de LJUDTOPIA JavaScript');
});