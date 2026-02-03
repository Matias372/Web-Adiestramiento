async function loadPartial(id, file, callback) {
  try {
    const res = await fetch(file);
    if (!res.ok) throw new Error(file);

    const el = document.getElementById(id);
    if (!el) return;

    el.innerHTML = await res.text();

    if (typeof callback === "function") {
      callback();
    }
  } catch (e) {
    console.error("Error cargando", file, e);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  // Estructura base
  loadPartial("header", "partials/header.html");
  loadPartial("footer", "partials/footer.html");

  // Contenido principal
  loadPartial("hero-container", "partials/hero.html");
  loadPartial("conocenos-container", "partials/conocenos.html");
  loadPartial("clases-container", "partials/clases.html");
  loadPartial("modalidades-container", "partials/modalidades.html");

  // Reseñas (con init del slider)
  loadPartial(
    "reseñas-container",
    "partials/reseñas.html",
    () => {
      if (typeof initReseñasSlider === "function") {
        initReseñasSlider();
      }
    }
  );
});
