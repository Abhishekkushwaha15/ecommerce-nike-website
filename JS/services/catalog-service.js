import { products } from '../data/products.js';

export function getProducts(filters = {}) {
  return products.filter((product) => !filters.category || product.category === filters.category);
}

export function getProductBySlug(slug) {
  return products.find((product) => product.slug === slug);
}
