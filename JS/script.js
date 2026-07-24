import { routes } from './router/routes.js';
import { renderHeader } from './components/header.js';
import { renderFooter } from './components/footer.js';
import { initExperience, syncExperience, observeReveals } from './components/experience.js';
import { initToasts } from './components/toast.js';
import { loader } from './components/loader.js';

const app = document.querySelector('#app');
const siteUrl = window.location.href.split('#')[0];
const socialImageUrl = new URL('../assets/images/hero-performance-shoe.png', import.meta.url).href;

function setMetadata(route) {
  const title = `${route.title} | Nike`;
  const description = route.description;
  document.title = title;
  document.querySelector('meta[name="description"]')?.setAttribute('content', description);
  document.querySelector('meta[property="og:title"]')?.setAttribute('content', title);
  document.querySelector('meta[property="og:description"]')?.setAttribute('content', description);
  document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', title);
  document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', description);
  document.querySelector('link[rel="canonical"]')?.setAttribute('href', siteUrl);
  document.querySelector('meta[property="og:url"]')?.setAttribute('content', siteUrl);
  document.querySelector('meta[property="og:image"]')?.setAttribute('content', socialImageUrl);
  document.querySelector('meta[name="twitter:image"]')?.setAttribute('content', socialImageUrl);
}

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
  app.setAttribute('aria-busy', 'true');
  app.innerHTML = loader();
  const page = await route.load();
  setMetadata(route);
  app.dataset.route = route.path;
  app.innerHTML = page.render({ query });
  app.setAttribute('aria-busy', 'false');
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
