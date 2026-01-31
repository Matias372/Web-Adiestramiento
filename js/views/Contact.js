// js/views/Contact.js
export class Contact {
  static render(contactData) {
    const { id, sectionTitle, subtitle, formTitle, info } = contactData;
    
    return `
      <section id="${id}" class="contact-section py-5 bg-section-light">
        <div class="container">
          <!-- Título -->
          <div class="row justify-content-center mb-5">
            <div class="col-lg-8 text-center">
              <h2 class="display-4 fw-bold mb-3">${sectionTitle}</h2>
              <p class="lead text-muted">${subtitle}</p>
            </div>
          </div>
          
          <div class="row g-5">
            <!-- Información de contacto -->
            <div class="col-lg-5">
              <div class="contact-info card border-0 shadow-sm h-100">
                <div class="card-body p-4 p-lg-5">
                  <h3 class="h4 fw-bold mb-4">Información de contacto</h3>
                  
                  <div class="contact-item d-flex mb-4">
                    <div class="contact-icon bg-primary rounded-circle p-3 me-3">
                      <i class="bi bi-envelope text-white fs-5"></i>
                    </div>
                    <div>
                      <h5 class="h6 fw-bold mb-1">Email</h5>
                      <p class="text-muted mb-0">${info.email}</p>
                    </div>
                  </div>
                  
                  <div class="contact-item d-flex mb-4">
                    <div class="contact-icon bg-success rounded-circle p-3 me-3">
                      <i class="bi bi-telephone text-white fs-5"></i>
                    </div>
                    <div>
                      <h5 class="h6 fw-bold mb-1">Teléfono</h5>
                      <p class="text-muted mb-0">${info.phone}</p>
                    </div>
                  </div>
                  
                  <div class="contact-item d-flex mb-4">
                    <div class="contact-icon bg-warning rounded-circle p-3 me-3">
                      <i class="bi bi-geo-alt text-white fs-5"></i>
                    </div>
                    <div>
                      <h5 class="h6 fw-bold mb-1">Dirección</h5>
                      <p class="text-muted mb-0">${info.address}</p>
                    </div>
                  </div>
                  
                  <div class="contact-item d-flex">
                    <div class="contact-icon bg-info rounded-circle p-3 me-3">
                      <i class="bi bi-clock text-white fs-5"></i>
                    </div>
                    <div>
                      <h5 class="h6 fw-bold mb-1">Horario</h5>
                      <p class="text-muted mb-0">${info.schedule}</p>
                    </div>
                  </div>
                  
                  <!-- Mapa (opcional) -->
                  <div class="mt-5">
                    <div class="ratio ratio-16x9">
                      <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.45404041796!2d-3.7037906846040127!3d40.41999607936469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42287e9c8d26f5%3A0x2f7d7ba348c1c5b!2sMadrid%2C%20Espa%C3%B1a!5e0!3m2!1ses!2sus!4v1622541234567!5m2!1ses!2sus" 
                        style="border:0; border-radius: 8px;" 
                        allowfullscreen="" 
                        loading="lazy">
                      </iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Formulario de contacto -->
            <div class="col-lg-7">
              <div class="contact-form card border-0 shadow-sm">
                <div class="card-body p-4 p-lg-5">
                  <h3 class="h4 fw-bold mb-4">${formTitle}</h3>
                  
                  <form id="contactForm">
                    <div class="row g-3">
                      <div class="col-md-6">
                        <label for="name" class="form-label">Nombre completo *</label>
                        <input type="text" class="form-control" id="name" required>
                      </div>
                      <div class="col-md-6">
                        <label for="email" class="form-label">Email *</label>
                        <input type="email" class="form-control" id="email" required>
                      </div>
                      <div class="col-12">
                        <label for="subject" class="form-label">Asunto</label>
                        <input type="text" class="form-control" id="subject">
                      </div>
                      <div class="col-12">
                        <label for="message" class="form-label">Mensaje *</label>
                        <textarea class="form-control" id="message" rows="5" required></textarea>
                      </div>
                      <div class="col-12">
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" id="privacy" required>
                          <label class="form-check-label small" for="privacy">
                            Acepto la política de privacidad y el tratamiento de mis datos
                          </label>
                        </div>
                      </div>
                      <div class="col-12">
                        <button type="submit" class="btn btn-primary btn-lg px-5">
                          <i class="bi bi-send me-2"></i>
                          Enviar mensaje
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}