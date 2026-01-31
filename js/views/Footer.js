// js/views/Footer.js
export class Footer {
  static render(footerData) {
    const { logo, description, contact, social, copyright } = footerData;
    
    return `
      <footer class="footer bg-dark text-white pt-5 pb-4">
        <div class="container">
          <div class="row g-4">
            <!-- Columna 1: Logo y descripción -->
            <div class="col-lg-4 mb-4 mb-lg-0">
              <a href="#hero" class="text-white text-decoration-none">
                <h3 class="h2 fw-bold mb-3">${logo}</h3>
              </a>
              <p class="text-white-50 mb-4">${description}</p>
              <div class="social-icons">
                ${social.map(item => `
                  <a href="${item.url}" class="text-white me-3 fs-5" aria-label="${item.name}">
                    <i class="bi ${item.icon}"></i>
                  </a>
                `).join('')}
              </div>
            </div>
            
            <!-- Columna 2: Enlaces rápidos -->
            <div class="col-lg-2 col-md-4 mb-4 mb-md-0">
              <h5 class="h6 fw-bold mb-3 text-uppercase">Enlaces</h5>
              <ul class="list-unstyled">
                <li class="mb-2"><a href="#clases" class="text-white-50 text-decoration-none hover-text-white">Clases</a></li>
                <li class="mb-2"><a href="#modalidades" class="text-white-50 text-decoration-none hover-text-white">Modalidades</a></li>
                <li class="mb-2"><a href="#staff" class="text-white-50 text-decoration-none hover-text-white">Equipo</a></li>
                <li class="mb-2"><a href="#reseñas" class="text-white-50 text-decoration-none hover-text-white">Reseñas</a></li>
              </ul>
            </div>
            
            <!-- Columna 3: Recursos -->
            <div class="col-lg-2 col-md-4 mb-4 mb-md-0">
              <h5 class="h6 fw-bold mb-3 text-uppercase">Recursos</h5>
              <ul class="list-unstyled">
                <li class="mb-2"><a href="#" class="text-white-50 text-decoration-none hover-text-white">Blog canino</a></li>
                <li class="mb-2"><a href="#" class="text-white-50 text-decoration-none hover-text-white">Guías PDF</a></li>
                <li class="mb-2"><a href="#" class="text-white-50 text-decoration-none hover-text-white">Preguntas frecuentes</a></li>
                <li class="mb-2"><a href="#" class="text-white-50 text-decoration-none hover-text-white">Videos gratuitos</a></li>
              </ul>
            </div>
            
            <!-- Columna 4: Contacto -->
            <div class="col-lg-4 col-md-4">
              <h5 class="h6 fw-bold mb-3 text-uppercase">Contacto</h5>
              <ul class="list-unstyled text-white-50">
                <li class="mb-3 d-flex align-items-start">
                  <i class="bi bi-envelope me-3 mt-1"></i>
                  <span>${contact.email}</span>
                </li>
                <li class="mb-3 d-flex align-items-start">
                  <i class="bi bi-telephone me-3 mt-1"></i>
                  <span>${contact.phone}</span>
                </li>
                <li class="mb-3 d-flex align-items-start">
                  <i class="bi bi-geo-alt me-3 mt-1"></i>
                  <span>${contact.address}</span>
                </li>
              </ul>
              
              <!-- Formulario de newsletter -->
              <div class="mt-4">
                <h6 class="h6 fw-bold mb-2">Suscríbete al newsletter</h6>
                <div class="input-group">
                  <input type="email" class="form-control bg-dark border-secondary text-white" placeholder="Tu email" aria-label="Email">
                  <button class="btn btn-primary" type="button">
                    <i class="bi bi-send"></i>
                  </button>
                </div>
                <small class="text-white-50 d-block mt-2">Recibe consejos y ofertas exclusivas</small>
              </div>
            </div>
          </div>
          
          <!-- Línea divisoria -->
          <hr class="my-4 border-secondary">
          
          <!-- Copyright -->
          <div class="row">
            <div class="col-12 text-center">
              <p class="mb-0 text-white-50">
                ${copyright} | 
                <a href="#" class="text-white-50 text-decoration-none ms-2">Política de privacidad</a> | 
                <a href="#" class="text-white-50 text-decoration-none ms-2">Términos de servicio</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    `;
  }
}