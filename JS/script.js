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
