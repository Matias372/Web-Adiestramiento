// js/views/Team.js
export class Team {
  static render(teamData) {
    const { id, sectionTitle, description, members, tagline } = teamData;
    
    return `
      <section id="${id}" class="team-section py-5 bg-section-light">
        <div class="container">
          <!-- Título -->
          <div class="row justify-content-center mb-5">
            <div class="col-lg-8 text-center">
              <h2 class="display-4 fw-bold mb-3">${sectionTitle}</h2>
              <p class="lead text-muted">${description}</p>
            </div>
          </div>
          
          <!-- Miembros del equipo (3 tarjetas) -->
          <div class="row g-4 justify-content-center">
            ${members.map(member => `
              <div class="col-md-6 col-lg-4">
                <div class="card border-0 shadow-sm h-100">
                  <img src="${member.image}" class="card-img-top" alt="${member.name}" style="height: 300px; object-fit: cover;">
                  <div class="card-body text-center p-4">
                    <h4 class="card-title fw-bold">${member.name}</h4>
                    <p class="text-primary fw-medium">${member.role}</p>
                    <p class="card-text">${member.bio}</p>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
          
          <!-- Mensaje final -->
          <div class="row mt-5">
            <div class="col-12 text-center">
              <p class="fs-4 fst-italic text-muted">${tagline}</p>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}