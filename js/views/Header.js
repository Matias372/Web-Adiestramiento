// js/views/Header.js
// Genera el HTML para el encabezado de la página.

export class Header {
  static render(headerData) {
    const { logo, navItems } = headerData;

    // Separamos los enlaces normales del botón de CTA (Contacto)
    const regularNavItems = navItems.filter(item => !item.isCta);
    const ctaItem = navItems.find(item => item.isCta);

    return `
      <!-- Navbar de Bootstrap - Responsive y moderno -->
      <header class="fixed-top shadow-sm" style="background-color: rgba(255, 255, 255, 0.95); backdrop-filter: blur(10px);">
        <nav class="navbar navbar-expand-lg navbar-light py-3">
          <div class="container">
            <!-- Logo -->
            <a class="navbar-brand d-flex align-items-center" href="#hero">
                <img src="assets/images/Logo.svg" 
                    alt="Perronautas"
                    height="60"
                    class="d-none d-md-block me-2"> <!-- Solo visible en tablets/desktop -->
                
                <!-- Texto que siempre se ve -->
                <span class="fw-bold fs-4">${logo.text}</span>
                
                <!-- Logo pequeño para móviles (opcional) -->
                <img src="assets/images/Logo.svg"
                    alt=""
                    height="40"
                    class="d-md-none me-2">
            </a>

            <!-- Botón Hamburguesa para móviles -->
            <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMain">
              <span class="navbar-toggler-icon"></span>
            </button>

            <!-- Elementos del menú -->
            <div class="collapse navbar-collapse" id="navbarMain">
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center">
                ${regularNavItems.map(item => `
                  <li class="nav-item mx-2">
                    <a class="nav-link text-dark fw-medium" href="${item.href}">${item.text}</a>
                  </li>
                `).join('')}

                <!-- Botón especial de Contacto -->
                ${ctaItem ? `
                  <li class="nav-item ms-2">
                    <a class="btn btn-primary btn-lg shadow" href="${ctaItem.href}">
                      ${ctaItem.text}
                    </a>
                  </li>
                ` : ''}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    `;
  }
}