# Swoosh Store

A vanilla HTML, CSS, and JavaScript Nike-inspired ecommerce experience with hash-based routing and a responsive product catalog.

## Start

Serve the repository root with any static development server, then open `HTML/index.html`. The app uses hash routing, so no server-side route rewrites are required.

## Routes

| Route | Purpose |
| --- | --- |
| `#/` | Home |
| `#/shop` | Product catalog with search, filters, sorting, wishlist, bag actions, and load-more pagination |
| `#/product?slug=air-zoom-pegasus-41` | Product detail with gallery, size/colour options, bag, wishlist, and reviews |
| `#/search` | Search results |
| `#/wishlist` | Saved products |
| `#/cart` | Shopping cart |
| `#/checkout` | Checkout flow |
| `#/account` | Customer account |
| `#/about` | Brand story, values, team, and service commitments |
| `#/contact` | Contact details, validated message form, FAQ, and map placeholder |

## Experience features

- Wishlist and bag choices persist in local storage, with live navigation counters and toast feedback.
- Search supports instant results, suggestions, result highlighting, and recent searches stored locally.
- Shared scroll progress, back-to-top control, route loading indicator, responsive empty states, and a custom 404 page provide consistent feedback throughout the storefront.

## Structure

```text
HTML/              application entry document
CSS/               CSS entry point and base, layout, component, page layers
JS/                router, reusable components, config, data, services, utilities
pages/             lazy-loaded page modules (one module per route)
components/        static component contracts/templates
data/              JSON placeholder data
assets/            images and icons
```

## Conventions

- Add cross-page visual elements as modules in `JS/components/`.
- The initial reusable component contracts include header, footer, product card/grid, cart item, filter panel, quantity selector, empty state, and loader.
- Keep page rendering and page-specific behaviour in `pages/`.
- Place API, storage, and domain operations in `JS/services/`.
- Import CSS only through `CSS/style.css`; scope rules by responsibility.
- The local catalog lives in `JS/data/products.js`; filters, sorting, and product lookup are handled client-side in `JS/services/catalog-service.js`.
- Cart and wishlist choices are stored locally in the browser, including product size and colour variants.

This project is for learning and demonstration purposes only and is not affiliated with Nike.
