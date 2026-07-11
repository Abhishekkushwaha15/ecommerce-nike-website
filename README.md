# Swoosh Store

A vanilla HTML, CSS, and JavaScript ecommerce foundation. It intentionally contains no UI yet; this repository only establishes the application architecture.

## Start

Serve the repository root with any static development server, then open `HTML/index.html`. The app uses hash routing, so no server-side route rewrites are required.

## Routes

| Route | Purpose |
| --- | --- |
| `#/` | Home |
| `#/shop` | Product catalog |
| `#/product?slug=air-max-alpha` | Product detail |
| `#/search` | Search results |
| `#/wishlist` | Saved products |
| `#/cart` | Shopping cart |
| `#/checkout` | Checkout flow |
| `#/account` | Customer account |

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
- Placeholder products live in `JS/data/products.js`; replace with an API or a data source later.

This project is for learning and demonstration purposes only and is not affiliated with Nike.
