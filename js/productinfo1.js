

var glides = document.querySelectorAll('.glide');
var images = document.querySelectorAll('.image');
let currentglide = 1;

// Javascript for image glider manual navigation
var manualNav = function(manual){
  glides.forEach((glide) => {
    glide.classList.remove('active');

    images.forEach((image) => {
      image.classList.remove('active');
    });
  });

  glides[manual].classList.add('active');
  images[manual].classList.add('active');
}

images.forEach((image, i) => {
  image.addEventListener("click", () => {
    manualNav(i);
    currentglide = i;
  });
});


