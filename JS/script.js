import { routes } from './router/routes.js';
import { renderHeader } from './components/header.js';
import { renderFooter } from './components/footer.js';

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
  const page = await route.load();
  document.title = `${route.title} | Swoosh Store`;
  app.dataset.route = route.path;
  app.innerHTML = page.render({ query });
  page.init?.({ query });
}

function bootstrap() {
  renderHeader(document.querySelector('#site-header'));
  renderFooter(document.querySelector('#site-footer'));
  window.addEventListener('hashchange', renderRoute);
  renderRoute();
}

bootstrap();
