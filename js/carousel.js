var carouselIndex = 1;
showCarouselProduct(carouselIndex);

function changeCarouselProduct(n) {
  showCarouselProduct(carouselIndex += n);
}

function currentSlide(n) {
  showCarouselProduct(carouselIndex = n);
}

function showCarouselProduct(n) {
  var i;
  var carouselProducts = document.getElementsByClassName("carousel-product");
  if (n > carouselProducts.length) {carouselIndex = 1}
  if (n < 1) {carouselIndex = carouselProducts.length}
  for (i = 0; i < carouselProducts.length; i++) {
      carouselProducts[i].style.display = "none";
  }
  carouselProducts[carouselIndex-1].style.display = "block";
}