// js/main.js - VERSIÓN FINAL COMPLETA
import { siteData } from './models/data.js';
import { Header } from './views/Header.js';
import { Hero } from './views/Hero.js';
import { Team } from './views/Team.js';
import { Classes } from './views/Classes.js';
import { Modalities } from './views/Modalities.js';
import { Reviews } from './views/Reviews.js';
import { Footer } from './views/Footer.js';
import { Contact } from './views/Contact.js';

// Smooth Scroll para enlaces internos
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Función principal
async function initApp() {
    console.log('🚀 Inicializando Perronautas...');
    
    try {
        // Renderizar todas las secciones
        document.getElementById('header-container').innerHTML = Header.render(siteData.header);
        document.getElementById('hero-container').innerHTML = Hero.render(siteData.heroSlider);
        document.getElementById('team-container').innerHTML = Team.render(siteData.team);
        document.getElementById('classes-container').innerHTML = Classes.render(siteData.classes);
        document.getElementById('modalities-container').innerHTML = Modalities.render(siteData.modalities);
        document.getElementById('reviews-container').innerHTML = Reviews.render(siteData.reviews);
        document.getElementById('footer-container').innerHTML = Footer.render(siteData.footer);
        document.getElementById('contact-container').innerHTML = Contact.render(siteData.contact);
        
        // Inicializar smooth scroll
        initSmoothScroll();
        
        console.log('✅ Todas las secciones cargadas correctamente');
    } catch (error) {
        console.error('❌ Error al cargar la aplicación:', error);
    }
}

// Iniciar cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}