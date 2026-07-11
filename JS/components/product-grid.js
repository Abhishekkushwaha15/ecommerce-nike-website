import { productCard } from './product-card.js';

export function productGrid(products) {
  return products.map(productCard).join('');
}
