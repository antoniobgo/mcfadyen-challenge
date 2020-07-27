var cartQuantity = 0;

function incrementCartQuantity() {
  cartQuantity++;
  document.getElementsByClassName('cartQuantity')[0].textContent = cartQuantity;
}