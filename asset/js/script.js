const marquee = document.querySelector('.trusted-marquee');
  const content = document.querySelector('.marquee-content');
  let currentX = 0;
  let scrollDelta = 0;
  let lastTime = null;
  let scrollTimeout = null;

  // Get width of one half of marquee
  const contentWidth = content.offsetWidth / 2;

  function animate(time) {
    if (!lastTime) lastTime = time;
    const delta = time - lastTime;
    lastTime = time;

    const baseSpeed = 0.05;
    currentX -= baseSpeed * delta;

    // Scroll override (scroll up/down)
    if (scrollDelta !== 0) {
      currentX += scrollDelta;
      scrollDelta = 0;
    }

    // Wrap-around logic for seamless loop
    if (currentX <= -contentWidth) {
      currentX = 0;
    }
    if (currentX > 0) {
      currentX = -contentWidth;
    }

    marquee.style.transform = `translateX(${currentX}px)`;

    requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);

  // Scroll logic
  window.addEventListener('wheel', (e) => {
    const direction = e.deltaY < 0 ? 1 : -1;
    scrollDelta = direction * 10;

    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      scrollDelta = 0;
    }, 100);
  });

// _______________________

 jQuery(document).ready(function ($) {
  $('.solutions-made-for-industry-carousel').owlCarousel({
    loop: true,
    margin: 30,
    autoplay: true,
    nav: true,
    navText: [
      '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M16 8H2M7.322 2.64L2 8l5.322 5.36" stroke="currentColor" stroke-width="2"/></svg>',
      '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 8h14M8.678 2.64L14 8l-5.322 5.36" stroke="currentColor" stroke-width="2"/></svg>'
    ],
    dots: false,
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 4 }
    }
  });
});


