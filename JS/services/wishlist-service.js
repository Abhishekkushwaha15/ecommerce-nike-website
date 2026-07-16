import { STORAGE_KEYS } from '../config/constants.js';
import { emitStoreChange } from './store-events.js';

export function getWishlist() { return JSON.parse(localStorage.getItem(STORAGE_KEYS.wishlist) || '[]'); }

export function toggleWishlist(productId) {
  const items = getWishlist();
  const index = items.indexOf(productId);
  const action = index >= 0 ? 'remove' : 'add';
  index >= 0 ? items.splice(index, 1) : items.push(productId);
  localStorage.setItem(STORAGE_KEYS.wishlist, JSON.stringify(items));
  emitStoreChange('wishlist', action, productId);
  return items;
}
