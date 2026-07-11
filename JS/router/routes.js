export const routes = [
  { path: '/', title: 'Home', load: () => import('../../pages/home.js') },
  { path: '/shop', title: 'Shop', load: () => import('../../pages/shop.js') },
  { path: '/product', title: 'Product', load: () => import('../../pages/product.js') },
  { path: '/search', title: 'Search', load: () => import('../../pages/search.js') },
  { path: '/wishlist', title: 'Wishlist', load: () => import('../../pages/wishlist.js') },
  { path: '/cart', title: 'Cart', load: () => import('../../pages/cart.js') },
  { path: '/checkout', title: 'Checkout', load: () => import('../../pages/checkout.js') },
  { path: '/account', title: 'Account', load: () => import('../../pages/account.js') },
  { path: '*', title: 'Page not found', load: () => import('../../pages/not-found.js') },
];
