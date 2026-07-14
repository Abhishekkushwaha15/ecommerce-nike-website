import { STORAGE_KEYS } from '../config/constants.js';

export function getCart() {
  return JSON.parse(localStorage.getItem(STORAGE_KEYS.cart) || '[]');
}

export function saveCart(items) {
  localStorage.setItem(STORAGE_KEYS.cart, JSON.stringify(items));
}

export function addToCart({ id, quantity = 1, size, color }) {
  const cart = getCart();
  const item = cart.find((entry) => entry.id === id && entry.size === size && entry.color === color);
  if (item) item.quantity = (item.quantity || 1) + quantity;
  else cart.push({ id, quantity, size, color });
  saveCart(cart);
  return cart;
}
