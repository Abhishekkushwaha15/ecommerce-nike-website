# Swoosh Store

A Nike-inspired storefront built with plain HTML, CSS, and JavaScript. It is a front-end portfolio project, not an official Nike site.

## What it includes

- Hash-based routing for the storefront pages and 404 state.
- Product search, filters, sorting, product options, wishlist, and cart.
- Browser-local cart and wishlist data through `localStorage`.
- Responsive navigation and layouts, keyboard-accessible controls, form feedback, and reduced-motion support.

## Stack

- HTML
- CSS with custom properties and responsive layouts
- JavaScript ES modules
- Browser APIs: `localStorage`, `CustomEvent`, and `IntersectionObserver`

## Run locally

There is no build step. Serve the repository root with any static server:

```bash
python -m http.server 4173
```

Then open `http://localhost:4173/HTML/index.html`.

## Useful routes

```text
#/
#/shop
#/product?slug=air-zoom-pegasus-41
#/search?q=running
#/wishlist
#/cart
```

Clear the site’s local storage to reset cart, wishlist, and recent-search data.

## Structure

```text
HTML/       Entry document
CSS/        Base, component, layout, and page styles
JS/         Router, components, services, utilities, and catalog data
pages/      Lazy-loaded route modules
assets/     Image assets
data/       JSON reference data
components/ Static component notes
```

## Screenshots

Screenshots can be added under `docs/screenshots/` when they are available.

## Accessibility and performance

The app includes a skip link, visible focus states, labelled controls, live status updates, and reduced-motion handling. Route modules load on demand; the hero image is preloaded and catalog data is local to the app.

## Next steps

- Connect the checkout, account, newsletter, and contact flows to real services.
- Add automated browser and accessibility tests.
- Replace illustrative product art with licensed photography.

## License

[MIT](LICENSE)
