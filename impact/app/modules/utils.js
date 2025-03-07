function closeCartDrawer() {
  const cartDrawer = document.getElementById('cart-drawer');
  const closeButton = cartDrawer?.querySelector('.drawer__close-icon');
  if (!cartDrawer || !closeButton) return;

  closeButton.click();
}

export {
  closeCartDrawer
}