// js/views/Modalities.js
export class Modalities {
  static render(modalitiesData) {
    const { id, sectionTitle, items } = modalitiesData;
    
    return `
      <section id="${id}" class="modalities-section py-5 bg-section-light">
        <div class="container">
          <!-- Título -->
          <div class="row justify-content-center mb-5">
            <div class="col-lg-10 text-center">
              <h2 class="display-4 fw-bold mb-3">${sectionTitle}</h2>
              <p class="lead text-muted">Elige la modalidad que mejor se adapte a tus necesidades y estilo de vida</p>
            </div>
          </div>
          
          <!-- Dos modalidades (Online y Presencial) -->
          <div class="row g-5 align-items-stretch">
            ${items.map((item, index) => `
              <div class="col-lg-6">
                <div class="modality-card card border-0 h-100 shadow-lg ${index === 0 ? 'online-card' : 'presential-card'}">
                  <div class="row g-0 h-100">
                    <!-- Imagen -->
                    <div class="col-md-6">
                      <div class="modality-image h-100" style="background-image: url('${item.image}'); background-size: cover; background-position: center; min-height: 300px;">
                        <div class="modality-badge p-3">
                          <span class="badge ${item.type === 'online' ? 'bg-primary' : 'bg-success'} fs-6 px-4 py-2">
                            ${item.type === 'online' ? '🌐 ONLINE' : '🏫 PRESENCIAL'}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <!-- Contenido -->
                    <div class="col-md-6">
                      <div class="card-body p-4 d-flex flex-column h-100">
                        <h3 class="card-title fw-bold display-6 mb-3">${item.title}</h3>
                        <p class="text-muted mb-4">${item.description}</p>
                        
                        <ul class="features-list list-unstyled mb-4 flex-grow-1">
                          ${item.features.map(feature => `
                            <li class="mb-3">
                              <i class="bi bi-check-circle-fill ${item.type === 'online' ? 'text-primary' : 'text-success'} me-2"></i>
                              <span class="fw-medium">${feature}</span>
                            </li>
                          `).join('')}
                        </ul>
                        
                        <div class="mt-auto">
                          <button class="btn ${item.type === 'online' ? 'btn-primary' : 'btn-success'} btn-lg w-100 py-3">
                            Elegir ${item.type === 'online' ? 'Online' : 'Presencial'}
                            <i class="bi bi-arrow-right ms-2"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
          
          <!-- Nota comparativa -->
          <div class="row mt-5">
            <div class="col-12 text-center">
              <div class="alert alert-info border-0" style="background-color: #f0f9ff;">
                <p class="mb-0">
                  <i class="bi bi-info-circle-fill text-primary me-2"></i>
                  <strong>¿No sabes cuál elegir?</strong> Ambas modalidades incluyen acceso a nuestra comunidad privada y material exclusivo. ¡Puedes probar una clase gratis!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}