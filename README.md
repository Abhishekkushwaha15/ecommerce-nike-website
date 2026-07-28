# Swoosh Store

Swoosh Store is a polished, Nike-inspired ecommerce storefront built with vanilla HTML, CSS, and JavaScript. It demonstrates a responsive product-shopping experience with client-side hash routing and browser-local cart and wishlist state. This is a learning and portfolio project and is not affiliated with, endorsed by, or connected to Nike.

## Features

- Hash-based routes for home, shop, product, search, wishlist, cart, about, contact, account, checkout, and a custom 404 state.
- Search, product filtering, sorting, pagination, colour and size selection, related products, and review anchors.
- Persistent shopping bag and wishlist using `localStorage`, with live header counts and toast feedback.
- Responsive mobile navigation, accessible form validation, skip link, keyboard-friendly controls, and reduced-motion support.
- Per-route page titles and social metadata, responsive layouts, loading feedback, back-to-top control, and lightweight reveal effects.

## Tech Stack

- HTML5
- CSS3 (custom properties, responsive grids, media queries, and scoped imports)
- Vanilla JavaScript ES modules
- Browser `localStorage`, `CustomEvent`, `IntersectionObserver`, and hash routing

## Project Structure

```text
HTML/           Application entry document
CSS/            Base, layout, component, page, and refinement styles
JS/             Router, shared components, services, utilities, and catalog data
pages/          Lazy-loaded route modules
assets/         Image, icon, and font assets
data/           JSON reference data and placeholders
components/     Static component documentation
```

## Installation

No build step or package installation is required.

1. Clone the repository.
2. Serve the repository root with a static server. For example:

   ```bash
   python -m http.server 4173
   ```

3. Open `http://localhost:4173/HTML/index.html` in a modern browser.

## Usage

Use the primary navigation or hash routes to move through the storefront. For example:

```text
#/
#/shop
#/product?slug=air-zoom-pegasus-41
#/search?q=running
#/wishlist
#/cart
```

Cart and wishlist choices are intentionally stored in the current browser only. Clear the site’s local storage to reset the demo state.

## Screenshots

Add repository-hosted images here when available:

| View | Placeholder |
| --- | --- |
| Home | `docs/screenshots/home.png` |
| Shop | `docs/screenshots/shop.png` |
| Product | `docs/screenshots/product.png` |
| Mobile | `docs/screenshots/mobile.png` |

## Folder Structure

```text
ecommerce-nike-website/
├── HTML/index.html
├── CSS/
│   ├── base/              # reset, tokens, global rules
│   ├── components/        # reusable component styles
│   ├── layouts/           # application layout rules
│   ├── pages/             # route-specific styles
│   └── style.css          # single CSS entry point
├── JS/
│   ├── components/        # shared UI modules
│   ├── config/            # constants
│   ├── data/              # in-browser product catalog
│   ├── router/            # hash-route definitions and navigation
│   ├── services/          # catalog, cart, wishlist, and events
│   └── utils/             # formatting and safe HTML helpers
├── pages/                 # route render and init modules
├── assets/images/         # visual assets
└── data/                  # JSON reference files
```

## Accessibility

- Semantic landmarks, descriptive labels, visible focus treatment, and a skip-to-content link.
- Keyboard-accessible navigation, product controls, filters, cart controls, and forms.
- Live status updates for loading, cart feedback, form errors, and notifications.
- `prefers-reduced-motion` support for all decorative motion.

## Performance

- Native ES-module lazy loading keeps page modules route-scoped.
- A single preloaded hero image prevents the primary visual from loading late.
- CSS uses one entry point and component/page separation to keep ownership clear.
- Local catalog data avoids runtime API calls; animation work is limited with `requestAnimationFrame` and `IntersectionObserver`.

## Future Improvements

- Connect checkout, account, newsletter, and contact flows to real services.
- Add automated browser, accessibility, and visual-regression tests.
- Replace illustrative product art with licensed product photography and add real screenshots.
- Add a deployment-specific canonical URL, social image, and analytics only where appropriate.

## License

Distributed under the [MIT License](LICENSE).
