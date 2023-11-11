let menu = document.querySelector('.menu');
let subnavLinks = document.querySelector('.subnav__links--phone');
menu.addEventListener('click', ()=>{
  subnavLinks.classList.toggle('activeMenuPhone');
})

let linkPhone = document.querySelectorAll('.link--phone');

linkPhone.forEach((link)=>{
  link.addEventListener('click', ()=>{
    subnavLinks.classList.toggle('activeMenuPhone');
  })
})

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 10,
  loop: true,
  autoplay: {
    delay: 2000,
  },
  breakpoints: {
    520: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 6,
    },
  },
  
});

var map = L.map("map").setView([11.0041072, -74.8069813], 14);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

L.marker([11.0041072, -74.8069813])
  .addTo(map)
  .bindPopup("Barranquilla, Atlántico.")
  .openPopup();
