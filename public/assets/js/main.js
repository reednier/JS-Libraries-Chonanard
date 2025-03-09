document.addEventListener("DOMContentLoaded", () => {
  new Glide('.glide', {
    type: 'carousel',
    perView: 1,
    autoplay: 5000  // Optional: auto-play every 3 seconds
  }).mount();
});
