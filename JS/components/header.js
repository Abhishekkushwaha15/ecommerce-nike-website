export function renderHeader(container) {
  container.dataset.component = 'site-header';
  container.innerHTML = `<nav class="nav section-shell" aria-label="Main navigation">
    <a class="brand" href="#/" aria-label="Nike home"><span class="brand__mark">NIKE</span></a>
    <div class="nav__links"><a href="#/shop">New & Featured</a><a href="#/shop">Men</a><a href="#/shop">Women</a><a href="#/about">About</a><a href="#/contact">Contact</a></div>
    <div class="nav__tools"><a href="#/search" aria-label="Search"><svg viewBox="0 0 24 24"><circle cx="10.8" cy="10.8" r="5.8"/><path d="m16 16 4 4"/></svg></a><a href="#/wishlist" aria-label="Wishlist"><svg viewBox="0 0 24 24"><path d="M20.8 5.9a5.4 5.4 0 0 0-7.7 0L12 7l-1.1-1.1a5.4 5.4 0 0 0-7.7 7.7L12 22l8.8-8.4a5.4 5.4 0 0 0 0-7.7Z"/></svg></a><a href="#/cart" aria-label="Shopping bag"><svg viewBox="0 0 24 24"><path d="M5 8h14l-1 13H6L5 8Z M9 9V6a3 3 0 0 1 6 0v3"/></svg></a></div>
  </nav>`;
}
