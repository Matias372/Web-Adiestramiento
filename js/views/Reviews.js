// js/views/Reviews.js
export class Reviews {
  static render(reviewsData) {
    const { id, sectionTitle, items } = reviewsData;
    
    // Función para generar estrellas
    const renderStars = (rating) => {
      return Array(5).fill('').map((_, i) => 
        `<i class="bi ${i < rating ? 'bi-star-fill text-warning' : 'bi-star text-light'}"></i>`
      ).join('');
    };
    
    return `
      <section id="${id}" class="reviews-section py-5">
        <div class="container">
          <!-- Título -->
          <div class="row justify-content-center mb-5">
            <div class="col-lg-8 text-center">
              <h2 class="display-4 fw-bold mb-3">${sectionTitle}</h2>
              <p class="lead text-muted">La experiencia de más de 500 familias que han confiado en nosotros</p>
            </div>
          </div>
          
          <!-- Tarjetas de reseñas -->
          <div class="row g-4 justify-content-center">
            ${items.map(review => `
              <div class="col-md-6 col-lg-4">
                <div class="review-card card border-0 shadow h-100 hover-shadow">
                  <div class="card-body p-4 d-flex flex-column">
                    <!-- Encabezado con foto y nombre -->
                    <div class="d-flex align-items-center mb-4">
                      <div class="flex-shrink-0">
                        <img src="${review.image}" class="rounded-circle" alt="${review.name}" width="60" height="60">
                      </div>
                      <div class="flex-grow-1 ms-3">
                        <h5 class="fw-bold mb-1">${review.name}</h5>
                        <div class="stars mb-1">
                          ${renderStars(review.rating)}
                        </div>
                        <small class="text-muted">Cliente verificado</small>
                      </div>
                    </div>
                    
                    <!-- Texto de la reseña -->
                    <div class="review-text flex-grow-1 mb-4">
                      <p class="fst-italic">"${review.text}"</p>
                    </div>
                    
                    <!-- Indicador de tipo (opcional) -->
                    <div class="mt-auto">
                      <div class="d-flex justify-content-between align-items-center">
                        <span class="badge bg-light text-dark">
                          <i class="bi bi-award me-1"></i>
                          ${review.rating === 5 ? 'Experiencia 5 estrellas' : 'Cliente satisfecho'}
                        </span>
                        <small class="text-muted">Hace 2 semanas</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
          
          <!-- Call to Action adicional -->
          <div class="row mt-5">
            <div class="col-12 text-center">
              <div class="cta-box bg-primary text-white rounded-4 p-5 shadow-lg">
                <h3 class="h2 fw-bold mb-3">¿Listo para transformar la vida de tu perro?</h3>
                <p class="mb-4 opacity-75">Únete a nuestra comunidad de dueños responsables y disfruta de un 20% de descuento en tu primera clase.</p>
                <div class="d-flex flex-column flex-md-row justify-content-center gap-3">
                  <a href="#contacto" class="btn btn-light btn-lg px-5">
                    <i class="bi bi-calendar-check me-2"></i>
                    Agendar clase prueba
                  </a>
                  <a href="#clases" class="btn btn-outline-light btn-lg px-5">
                    <i class="bi bi-play-circle me-2"></i>
                    Ver video testimonios
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}