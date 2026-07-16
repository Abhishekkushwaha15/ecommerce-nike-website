import { getCart } from '../services/cart-service.js';
import { getWishlist } from '../services/wishlist-service.js';

function updateCounters() {
  const wishlistCount = getWishlist().length;
  const cartCount = getCart().reduce((sum, item) => sum + item.quantity, 0);
  document.querySelectorAll('[data-wishlist-count]').forEach((element) => { element.textContent = wishlistCount; element.hidden = !wishlistCount; });
  document.querySelectorAll('[data-cart-count]').forEach((element) => { element.textContent = cartCount; element.hidden = !cartCount; });
}

function updateScrollUI() {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  document.querySelector('[data-scroll-progress]').style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
  document.querySelector('[data-back-to-top]').classList.toggle('is-visible', window.scrollY > 500);
  document.querySelector('#site-header').classList.toggle('is-scrolled', window.scrollY > 18);
}

export function syncExperience(path = window.location.hash.slice(1).split('?')[0] || '/') {
  updateCounters();
  document.querySelectorAll('[data-nav-path]').forEach((link) => link.classList.toggle('is-active', link.dataset.navPath === path));
  updateScrollUI();
}

export function initExperience() {
  document.body.insertAdjacentHTML('afterbegin', '<div class="scroll-progress" data-scroll-progress aria-hidden="true"></div><div class="toast-region" data-toast-region aria-live="polite" aria-atomic="false"></div><button class="back-to-top" data-back-to-top type="button" aria-label="Back to top">↑</button>');
  window.addEventListener('scroll', updateScrollUI, { passive: true });
  window.addEventListener('store:change', updateCounters);
  document.querySelector('[data-back-to-top]').addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  updateScrollUI();
}
