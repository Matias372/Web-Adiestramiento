function initReseñasSlider() {
  const slides = document.querySelectorAll('.reseña-slide');
  const dots = document.querySelectorAll('.dot');
  const prevBtn = document.querySelector('.btn-prev');
  const nextBtn = document.querySelector('.btn-next');
  const track = document.querySelector('.reseña-track'); // 👈 NUEVO

  if (!slides.length || !track) return;

  let currentIndex = 0;

  function ajustarAltura() { // 👈 NUEVO
    const activeSlide = slides[currentIndex];
    if (activeSlide) {
      track.style.height = activeSlide.offsetHeight + 'px';
    }
  }

  function showSlide(index) {
    slides.forEach(s => s.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));

    slides[index].classList.add('active');
    dots[index].classList.add('active');

    currentIndex = index;

    ajustarAltura(); // 👈 NUEVO
  }

  nextBtn?.addEventListener('click', () => {
    showSlide((currentIndex + 1) % slides.length);
  });

  prevBtn?.addEventListener('click', () => {
    showSlide((currentIndex - 1 + slides.length) % slides.length);
  });

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      showSlide(parseInt(dot.dataset.index));
    });
  });

  setInterval(() => {
    showSlide((currentIndex + 1) % slides.length);
  }, 7000);

  showSlide(0);
}
