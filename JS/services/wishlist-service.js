import { STORAGE_KEYS } from '../config/constants.js';

export function getWishlist() { return JSON.parse(localStorage.getItem(STORAGE_KEYS.wishlist) || '[]'); }

export function toggleWishlist(productId) {
  const items = getWishlist();
  const index = items.indexOf(productId);
  index >= 0 ? items.splice(index, 1) : items.push(productId);
  localStorage.setItem(STORAGE_KEYS.wishlist, JSON.stringify(items));
  return items;
}
