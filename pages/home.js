const arrow = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h13M13 6l6 6-6 6"/></svg>';
import { initNewsletter, newsletter } from '../JS/components/newsletter.js';

export function render() {
  return `
    <section class="home" data-page="home">
      <section class="hero section-shell">
        <div class="hero__image" aria-hidden="true"></div>
        <div class="hero__copy reveal">
          <p class="eyebrow"><span></span> Nike Air Max Dn</p>
          <h1>Move at the<br><em>speed</em> of now.</h1>
          <p class="hero__description">The future of air is here. Engineered for all-day movement, designed to turn every step into a statement.</p>
          <div class="hero__actions">
            <a class="button button--light" href="#/shop">Shop the collection ${arrow}</a>
            <a class="text-link" href="#/?anchor=featured">Discover the story <span>↓</span></a>
          </div>
        </div>
        <div class="hero__meta"><span>01</span><i></i><span>04</span></div>
        <div class="hero__tag">New<br>arrival</div>
      </section>

      <section id="featured" class="products section-shell content-section">
        <div class="section-heading reveal">
          <div><p class="eyebrow eyebrow--dark">Latest drops</p><h2>Made to be in<br>motion.</h2></div>
          <a class="text-link text-link--dark" href="#/shop">View all shoes ${arrow}</a>
        </div>
        <div class="product-grid">
          <article class="product-card reveal"><div class="product-card__image shoe-a"><span>New</span><button aria-label="Add Air Zoom Pegasus to favourites">♡</button></div><div class="product-card__bottom"><div><h3>Air Zoom Pegasus 41</h3><p>Men's Road Running Shoes</p></div><strong>₹ 12,795</strong></div></article>
          <article class="product-card reveal"><div class="product-card__image shoe-b"><button aria-label="Add Air Max Dn8 to favourites">♡</button></div><div class="product-card__bottom"><div><h3>Air Max Dn8</h3><p>Women's Shoes</p></div><strong>₹ 16,995</strong></div></article>
          <article class="product-card reveal"><div class="product-card__image shoe-c"><span>Just in</span><button aria-label="Add Vomero to favourites">♡</button></div><div class="product-card__bottom"><div><h3>Vomero 18</h3><p>Men's Road Running Shoes</p></div><strong>₹ 13,295</strong></div></article>
        </div>
      </section>

      <section class="categories content-section">
        <div class="section-shell"><div class="section-heading reveal"><div><p class="eyebrow eyebrow--dark">Shop by sport</p><h2>Find your<br>rhythm.</h2></div><p class="heading-note">Whatever moves you, we have the gear to take you further.</p></div></div>
        <div class="category-grid section-shell">
          <a href="#/shop" class="category category--run reveal"><div><p>Running</p><span>Explore ${arrow}</span></div></a>
          <a href="#/shop" class="category category--train reveal"><div><p>Training</p><span>Explore ${arrow}</span></div></a>
          <a href="#/shop" class="category category--life reveal"><div><p>Sportswear</p><span>Explore ${arrow}</span></div></a>
        </div>
      </section>

      <section class="promise section-shell content-section reveal">
        <div class="promise__intro"><p class="eyebrow">Designed for every day</p><h2>More than<br>just a shoe.</h2></div>
        <div class="promise__items">
          <article><span>01</span><h3>Performance first</h3><p>Innovation that helps you go farther, faster, and with more confidence.</p></article>
          <article><span>02</span><h3>Built to last</h3><p>Premium materials and obsessive attention to every stitch and detail.</p></article>
          <article><span>03</span><h3>Made for you</h3><p>Free delivery, easy returns, and a fit that feels like it was made for you.</p></article>
        </div>
      </section>

      ${newsletter()}
    </section>`;
}

export function init() { initNewsletter(); }
