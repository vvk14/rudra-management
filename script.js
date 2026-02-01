// 1. Smooth Reveal Animation for Text
gsap.from(".reveal", {
  y: 100,
  duration: 1,
  stagger: 0.2,
  opacity: 0,
  ease: "power4.out",
});

// 2. Scroll Animation for Service Cards
gsap.from(".service-card", {
  scrollTrigger: {
    trigger: "#services",
    start: "top 80%",
  },
  y: 100,
  opacity: 0,
  stagger: 0.2,
  duration: 1,
});

// 3. Team Swiper Slider
var swiper = new Swiper(".teamSwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  autoplay: { delay: 2500 },
  breakpoints: {
    320: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  },
});

// 4. Clients Infinite Marquee Effect
var clientSwiper = new Swiper(".clientSwiper", {
  slidesPerView: 5,
  spaceBetween: 50,
  loop: true,
  speed: 3000,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  breakpoints: {
    320: { slidesPerView: 2 },
    768: { slidesPerView: 4 },
    1024: { slidesPerView: 5 },
  },
});
