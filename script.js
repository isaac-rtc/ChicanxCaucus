(function () {
  const hero = document.querySelector('.hero');
  if (!hero) return;

  const images = [
    'images/delosmuertos.png',
    'images/ECCSF.png',
    'images/runaway.JPG',
    'images/artday.JPG',
    'images/theboys.JPG',
  ];

  // Preload to avoid flashes
  images.forEach(src => { const img = new Image(); img.src = src; });

  let index = 0;
  const show = (i) => {
    index = (i + images.length) % images.length;
    hero.style.backgroundImage = `url("${images[index]}")`;
  };

  // Initialize with the first image
  show(0);

  // Wire up arrows
  const leftBtn  = document.querySelector('.hero-arrow.left');
  const rightBtn = document.querySelector('.hero-arrow.right');

  leftBtn.addEventListener('click',  () => show(index - 1));
  rightBtn.addEventListener('click', () => show(index + 1));

  // Keyboard support
  window.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft')  show(index - 1);
    if (event.key === 'ArrowRight') show(index + 1);
  });
})();
