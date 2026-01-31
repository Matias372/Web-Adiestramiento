export const seoConfig = {
    title: "Perronautas | Educación Canina Profesional",
    description: "Entrenamiento canino profesional con métodos basados en ciencia. Clases online y presenciales.",
    canonicalUrl: "https://www.perronautas.com",
    
    // Schema.org Structured Data
    generateOrganizationSchema: () => ({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Perronautas",
        "description": "Educación canina profesional con métodos basados en ciencia",
        "url": "https://www.perronautas.com",
        "logo": "https://www.perronautas.com/assets/images/logo.png",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Ciudad",
            "addressRegion": "Región",
            "addressCountry": "País"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+123456789",
            "contactType": "Customer Service"
        }
    }),
    
    // Métodos para actualizar meta tags dinámicamente
    updateMetaTags: (pageTitle = '', pageDescription = '', pageImage = '') => {
        // Actualizar título
        if (pageTitle) {
            document.title = `${pageTitle} | Perronautas`;
        }
        
        // Actualizar meta description
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc && pageDescription) {
            metaDesc.setAttribute('content', pageDescription);
        }
        
        // Actualizar Open Graph
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle && pageTitle) {
            ogTitle.setAttribute('content', pageTitle);
        }
    }
};