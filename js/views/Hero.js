// js/views/Hero.js
// Genera el Slider / Sección principal de la página.

export class Hero {
  static render(slides) {
    if (!slides || slides.length === 0) return '<section id="hero"></section>';

    // El primer slide lleva la clase 'active'
    return `
      <!-- Hero Section - Usamos el Carousel de Bootstrap -->
      <section id="hero" class="hero-section">
        <div id="heroCarousel" class="carousel slide carousel-fade" data-bs-ride="carousel">
          <!-- Indicadores (puntos de navegación inferiores) -->
          <div class="carousel-indicators">
            ${slides.map((slide, index) => `
              <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="${index}"
                class="${index === 0 ? 'active' : ''}" aria-current="${index === 0 ? 'true' : 'false'}"
                aria-label="Slide ${index + 1}">
              </button>
            `).join('')}
          </div>

          <!-- Slides -->
          <div class="carousel-inner">
            ${slides.map((slide, index) => `
              <div class="carousel-item ${index === 0 ? 'active' : ''}" style="height: 100vh;">
                <!-- Imagen de fondo -->
                <div class="carousel-slide-bg" style="background-image: url('${slide.image}');"></div>
                <!-- Capa oscura para mejorar legibilidad del texto -->
                <div class="carousel-overlay"></div>

                <!-- Contenido del slide -->
                <div class="carousel-caption d-flex flex-column justify-content-center h-100">
                  <div class="container">
                    <h1 class="display-2 fw-bold mb-4">${slide.title}</h1>
                    <p class="lead fs-3 mb-5">${slide.subtitle}</p>
                    <a href="${slide.ctaLink}" class="btn btn-primary btn-lg px-5 py-3">
                      ${slide.ctaText}
                    </a>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>

          <!-- Controles anterior/siguiente (opcionales) -->
          <button class="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Anterior</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Siguiente</span>
          </button>
        </div>
      </section>
    `;
  }
}