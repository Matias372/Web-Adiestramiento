// js/views/Classes.js
export class Classes {
  static render(classesData) {
    const { id, sectionTitle, intro, items } = classesData;
    
    return `
      <section id="${id}" class="classes-section py-5">
        <div class="container">
          <!-- Encabezado con imagen y texto (como en perronautas-3) -->
          <div class="row align-items-center mb-5">
            <div class="col-lg-6">
              <h2 class="display-4 fw-bold mb-3">${sectionTitle}</h2>
              <p class="lead">${intro}</p>
            </div>
            <div class="col-lg-6">
              <img src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                   class="img-fluid rounded shadow" alt="Perro en entrenamiento">
            </div>
          </div>
          
          <!-- 3 columnas de clases -->
          <div class="row g-4 mt-4">
            ${items.map(item => `
              <div class="col-md-4">
                <div class="card border-0 shadow-lg h-100 hover-lift">
                  <img src="${item.image}" class="card-img-top" alt="${item.title}" style="height: 250px; object-fit: cover;">
                  <div class="card-body p-4">
                    <h3 class="h4 fw-bold">${item.title}</h3>
                    <p class="text-muted mb-3">${item.description}</p>
                    <ul class="list-unstyled">
                      ${item.features.map(feature => `
                        <li class="mb-2">
                          <i class="bi bi-check-circle-fill text-success me-2"></i>
                          ${feature}
                        </li>
                      `).join('')}
                    </ul>
                  </div>
                  <div class="card-footer bg-transparent border-0 pb-4">
                    <button class="btn btn-primary w-100">Más información</button>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>
    `;
  }
}