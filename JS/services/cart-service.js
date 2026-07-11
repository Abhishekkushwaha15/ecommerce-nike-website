import { STORAGE_KEYS } from '../config/constants.js';

export function getCart() {
  return JSON.parse(localStorage.getItem(STORAGE_KEYS.cart) || '[]');
}

export function saveCart(items) {
  localStorage.setItem(STORAGE_KEYS.cart, JSON.stringify(items));
}
