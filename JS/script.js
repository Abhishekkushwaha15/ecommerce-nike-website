import { routes } from './router/routes.js';
import { renderHeader } from './components/header.js';
import { renderFooter } from './components/footer.js';
import { initExperience, syncExperience, observeReveals } from './components/experience.js';
import { initToasts } from './components/toast.js';
import { loader } from './components/loader.js';

const app = document.querySelector('#app');

function getRoute() {
  const [path, query = ''] = window.location.hash.slice(1).split('?');
  return { path: path || '/', query: new URLSearchParams(query) };
}

function matchRoute(path) {
  return routes.find((route) => route.path === path)
    ?? routes.find((route) => route.path === '*');
}

export async function renderRoute() {
  const { path, query } = getRoute();
  const route = matchRoute(path);
  document.querySelector('#site-header').classList.remove('is-menu-open');
  document.body.classList.remove('nav-open');
  app.innerHTML = loader();
  const page = await route.load();
  document.title = `${route.title} | Nike`;
  app.dataset.route = route.path;
  app.innerHTML = page.render({ query });
  page.init?.({ query });
  syncExperience(route.path);
  observeReveals();
  const anchor = query.get('anchor');
  if (anchor) requestAnimationFrame(() => document.getElementById(anchor)?.scrollIntoView({ behavior: 'smooth', block: 'start' }));
  else window.scrollTo({ top: 0, behavior: 'auto' });
  app.focus({ preventScroll: true });
}

function bootstrap() {
  renderHeader(document.querySelector('#site-header'));
  renderFooter(document.querySelector('#site-footer'));
  initExperience();
  initToasts();
  window.addEventListener('hashchange', renderRoute);
  renderRoute();
}

bootstrap();


import { formatCurrency } from '../utils/currency.js';
import { quantitySelector } from './quantity-selector.js';

export function cartItem({ product, quantity, size, color }) {
  const sizeLabel = size || 'Standard';
  const colorLabel = color || product.colors[0];
  return `<article class="cart-item" data-cart-item data-product-id="${product.id}" data-size="${size || ''}" data-color="${color || ''}">
    <a class="cart-item__art product-art product-art--${product.art} product-art--color-${colorLabel}" href="#/product?slug=${product.slug}" aria-label="View ${product.name}"><span class="product-art__shoe" aria-hidden="true"></span></a>
    <div class="cart-item__details">
      <div class="cart-item__heading"><div><p>${product.category} · ${product.brand}</p><h2><a href="#/product?slug=${product.slug}">${product.name}</a></h2></div><strong>${formatCurrency(product.price * quantity)}</strong></div>
      <p class="cart-item__options">Size <b>${sizeLabel}</b><span></span>Colour <b>${colorLabel}</b></p>
      <div class="cart-item__footer">${quantitySelector({ value: quantity, max: 8 })}<span class="cart-item__unit-price">${formatCurrency(product.price)} each</span><div class="cart-item__actions"><button type="button" data-action="save-for-later">Save for later</button><button type="button" data-action="remove-cart-item" aria-label="Remove ${product.name} from bag">Remove</button></div></div>
    </div>
  </article>`;
}

